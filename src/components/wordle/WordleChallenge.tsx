import React, { SetStateAction, useEffect, useState } from "react";
import { ChallengeSettings, Settings } from "./Settings";
import { db } from "./db";
import SearchParamWatcher from "./SearchParamWatcher";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { getDocument, updateChallenges } from "../../firebase/database";
import { bots, challengeNames } from "./challangeNames";

interface ChallengeForm {
  setViewChallenge: React.Dispatch<SetStateAction<boolean>>;
  user:
    | {
        uid: string;
        userName: string;
      }
    | undefined;
}

interface WordCollection {
  word: string;
  definition: string;
  book: string;
  level: string;
  unit: string;
}
export interface Player {
  uid: string;
  userName: string;
  score: number;
  timeline: Date[] | never[] | any[];
  fails: string[];
  difficulty?: string | null;
}

export interface ChallengeData {
  words: WordCollection[];
  theme: number;
  id: string;
  name: string;
  backupWords: WordCollection[];
  levels: any[];
  players: Player[];
  settings: {
    books: string[];
    levels: string[];
    units: string[];
  };
  created_at: Date;
}
export const CreateChallengeForm = (props: ChallengeForm) => {
  const setViewChallenge = props.setViewChallenge;
  const [filterBooks, setFilterBooks] = useState<string[]>();
  const [filterLevels, setFilterLevels] = useState<string[]>();
  const [filterUnits, setFilterUnits] = useState<string[]>();
  const [wordsCollection, setWordsCollection] = useState<WordCollection[]>();
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  const [existingChallenge, setExistingChallenge] = useState<ChallengeData>();
  const [otherChallenges, setOtherChallenges] = useState<ChallengeData[]>([]);

  const [toggleExcludeBots, setExcludeBots] = useState(false);
  const [numberOfBots, setNumberOfBots] = useState(4);
  const [difficulty, setDifficulty] = useState("Steady Squirrel");

  const [toggleCreateChallenge, setCreateChallenge] = useState<boolean>(false);

  const handleMakeBot = (title: string) => {
    const item = bots.difficultyLevels.find((a) => a.title === title);
    const min = item?.delayRange.min || 0;
    const max = item?.delayRange.max || 1;

    const nameArray =
      bots.botNamesByDifficulty[
        title as keyof typeof bots.botNamesByDifficulty
      ];
    const name = nameArray[Math.floor(Math.random() * nameArray.length)];
    const randomId = uuidv4();
    const currentTime = new Date();
    let timeline = [new Date(currentTime.toISOString())];

    for (let i = 0; i < numberOfQuestions; i++) {
      const temperatrue = [0.85, 0.9, 0.95, 0.8, 1, 1, 1.05, 1.1, 1.15, 1.2][
        Math.floor(Math.random() * 10)
      ];
      const delay = Math.floor(
        (Math.random() * (max - min) + min) * temperatrue
      );

      const tempTime = new Date(timeline[timeline.length - 1].toISOString());
      timeline.push(
        new Date(
          tempTime.setSeconds(
            timeline[timeline.length - 1].getSeconds() + delay
          )
        )
      );
    }

    return {
      uid: randomId,
      userName: name,
      timeline: timeline,
      difficulty: title,
      score: numberOfQuestions,
      fails: [""],
    };
  };

  const handleCreateBots = () => {
    const difficultyArray = bots.difficultyLevels.map((a) => a.title);
    let newDifficultyArray = [];

    if (numberOfBots > 4) {
      toast.error("Maximum 4 bots allowed");
    } else if (numberOfBots === 4) {
      newDifficultyArray.push(handleMakeBot(difficulty));
      newDifficultyArray.push(handleMakeBot(difficulty));
      newDifficultyArray.push(
        handleMakeBot(
          difficultyArray[
            difficultyArray.indexOf(difficulty) > 0
              ? difficultyArray.indexOf(difficulty) - 1
              : difficultyArray.indexOf(difficulty)
          ]
        )
      );
      newDifficultyArray.push(
        handleMakeBot(
          difficultyArray[
            difficultyArray.indexOf(difficulty) > 1
              ? difficultyArray.indexOf(difficulty) - 2
              : difficultyArray.indexOf(difficulty)
          ]
        )
      );
    } else if (numberOfBots === 3) {
      newDifficultyArray.push(handleMakeBot(difficulty));
      newDifficultyArray.push(handleMakeBot(difficulty));
      newDifficultyArray.push(
        handleMakeBot(
          difficultyArray[
            difficultyArray.indexOf(difficulty) > 0
              ? difficultyArray.indexOf(difficulty) - 1
              : difficultyArray.indexOf(difficulty)
          ]
        )
      );
      newDifficultyArray.push(
        handleMakeBot(
          difficultyArray[
            difficultyArray.indexOf(difficulty) > 1
              ? difficultyArray.indexOf(difficulty) - 2
              : difficultyArray.indexOf(difficulty) > 0
              ? difficultyArray.indexOf(difficulty) - 1
              : difficultyArray.indexOf(difficulty)
          ]
        )
      );
    } else if (numberOfBots === 2) {
      newDifficultyArray.push(handleMakeBot(difficulty));

      newDifficultyArray.push(
        handleMakeBot(
          difficultyArray[
            difficultyArray.indexOf(difficulty) > 0
              ? difficultyArray.indexOf(difficulty) - 1
              : difficultyArray.indexOf(difficulty)
          ]
        )
      );
    } else {
      newDifficultyArray.push(handleMakeBot(difficulty));
    }

    return newDifficultyArray;
  };

  useEffect(() => {
    let filteredWord = db.filter((wrd) => filterBooks?.includes(wrd.book));
    if (!filterBooks || filterBooks?.length === 0) {
      filteredWord = db;
      return;
    }

    if (filterLevels && filterLevels.length > 0) {
      filteredWord = filteredWord.filter((wrd) =>
        filterLevels?.includes(wrd.level)
      );

      if (filterUnits && filterUnits.length > 0) {
        filteredWord = filteredWord.filter((wrd) =>
          filterUnits?.includes(wrd.unit)
        );
      }
    }
    setWordsCollection(filteredWord);

    if (filteredWord.length < numberOfQuestions) {
      toast.error(
        "There are less than " + numberOfQuestions + " words in this collection"
      );
    }
  }, [numberOfQuestions, filterBooks, filterLevels, filterUnits]);

  const handleCreateChallenge = () => {
    let randomWords: WordCollection[] = [];
    let backUpRandomWords: WordCollection[] = [];

    if (filterBooks?.length === 0) {
      toast.error("Please pick at least 1 book");
      return;
    }

    if (wordsCollection && wordsCollection.length < numberOfQuestions) {
      toast.error(
        "There are less than " + numberOfQuestions + " words in this collection"
      );
      return;
    }
    while (randomWords.length < numberOfQuestions) {
      if (wordsCollection) {
        const randomIndex = Math.floor(Math.random() * wordsCollection?.length);
        const randomWord = wordsCollection[randomIndex];
        if (!randomWords.find((wrd) => wrd.word === randomWord.word)) {
          randomWords.push(randomWord);
        }
      }
    }

    if (wordsCollection) {
      while (
        backUpRandomWords.length < 10 &&
        randomWords.length + backUpRandomWords.length < wordsCollection.length
      ) {
        const randomIndex = Math.floor(Math.random() * wordsCollection?.length);
        const randomWord = wordsCollection[randomIndex];
        if (
          !randomWords.find((wrd) => wrd.word === randomWord.word) &&
          !backUpRandomWords.find((wrd) => wrd.word === randomWord.word)
        ) {
          backUpRandomWords.push(randomWord);
        }
      }
    }

    const randomChallengeID = uuidv4();
    const randomName =
      challengeNames[Math.floor(Math.random() * challengeNames.length)];
    const randomTheme = Math.floor(Math.random() * 20);
    const challengeData: ChallengeData = {
      id: randomChallengeID,
      name: randomName,
      theme: randomTheme,
      settings: {
        books: filterBooks || [],
        levels: filterLevels || [],
        units: filterUnits || [],
      },
      words: randomWords,
      created_at: new Date(),
      backupWords: backUpRandomWords,
      players: [
        {
          userName: props.user?.userName || "",
          uid: props.user?.uid || "",
          score: 0,
          fails: [],
          timeline: [],
        },
      ],
      levels: [],
    };

    getDocument("wordle", "challenges").then((res) => {
      if (!res.success) {
        toast.error("Couldn't load the previous challenges");
        return;
      }
      const oldData = res.data.challenges || [];

      if (!toggleExcludeBots && numberOfBots > 0) {
        const tempBots = handleCreateBots();

        tempBots.map((bot) => {
          if (bot !== undefined) {
            const newBotData = {
              userName: bot.userName || "",
              uid: bot.uid || "",
              difficulty: bot.difficulty,
              score: numberOfQuestions,
              fails: [],
              timeline: bot.timeline,
            };
            challengeData.players.push(newBotData);
          }
        });
      }

      oldData.push(challengeData);

      updateChallenges({
        challenges: oldData,
      }).then((resUpdate) => {
        if (!resUpdate.success) {
          toast.error("Couldn't create the Challenge");
          return;
        }
        toast.success("challenge created successfully");
        if (challengeData) {
          setExistingChallenge(challengeData);
          setCreateChallenge(false);
        }
      });
    });
  };

  useEffect(() => {
    getDocument("wordle", "challenges").then((res) => {
      if (!res.success) {
        toast.error("Couldn't load the previous challenges");
        return;
      }
      const tempChallenges = res.data.challenges;

      let tempExistingChallenges = tempChallenges.filter((ch: ChallengeData) =>
        ch.players.map((pl) => pl.uid).includes(props?.user?.uid || "")
      );
      const tempExistingChallenge = tempExistingChallenges.find(
        (ch: ChallengeData) => {
          const temp = ch.players.find((pl) => pl.uid === props.user?.uid);
          return temp && temp.timeline.length < ch.words.length;
        }
      );

      setExistingChallenge(tempExistingChallenge);
      const tempOtherChallenges = tempChallenges.filter(
        (ch: ChallengeData) =>
          props?.user?.uid &&
          !ch.players.map((pl) => pl.uid).includes(props?.user?.uid)
      );
      setOtherChallenges(tempOtherChallenges);
    });
    // handleMakeBot("Beginner Bunny");
    handleCreateBots();
  }, []);
  return (
    <>
      <div
        className="challenge-form-closer"
        onClick={() => {
          setViewChallenge(false);
        }}
      ></div>
      <div className="challenge-form-container">
        <div className="container-header-challenge">
          <h3>{toggleCreateChallenge ? "Create Challenge" : "Challenges"}</h3>
          {!toggleCreateChallenge && (
            <>
              {!existingChallenge && (
                <button
                  className="wordle-button create-wordle-challenge-button"
                  onClick={() => {
                    setCreateChallenge(true);
                  }}
                >
                  Create
                </button>
              )}
            </>
          )}
        </div>
        {toggleCreateChallenge ? (
          <>
            {" "}
            <div className="wordle-form-challenge">
              <div className="wordle-settings-main">
                <div className="div-form">
                  <div className="wordle-dropdown-grid challenge-grid">
                    <div className="checkbox-group checkbox-group-challenge">
                      <label className="checkbox-item">
                        Number of Questions
                      </label>
                      <div className="challenge-options">
                        {[10, 20, 30, 50].map((nmb) => (
                          <button
                            key={"number-of-questions-" + nmb}
                            className={
                              numberOfQuestions === nmb ? "selected" : ""
                            }
                            onClick={() => {
                              setNumberOfQuestions(nmb);
                            }}
                          >
                            {nmb}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ChallengeSettings
                db={db}
                filterBooks={filterBooks || []}
                filterLevels={filterLevels || []}
                filterUnits={filterUnits || []}
                setFilterBooks={setFilterBooks}
                setFilterLevels={setFilterLevels}
                setFilterUnits={setFilterUnits}
              />

              <div className="div-bot-setting wordle-settings-main">
                <h4>Bots</h4>
                <div className="div-form">
                  <input
                    type="checkbox"
                    checked={toggleExcludeBots}
                    onChange={(e) => {
                      setExcludeBots(e.target.checked);
                    }}
                  />{" "}
                  <label htmlFor="">Exclude Bots</label>
                </div>
                {!toggleExcludeBots && (
                  <>
                    <div className="div-form">
                      <input
                        type="number"
                        value={numberOfBots}
                        max={4}
                        min={0}
                        onChange={(e) => {
                          if (parseInt(e.target.value) > 4) {
                            toast.warn("Maximum 4 Bots Allowed");
                            setNumberOfBots(4);
                            return;
                          }
                          if (e.target.value === "") {
                            setNumberOfBots(0);
                          }
                          if (parseInt(e.target.value) < 0) {
                            toast.warn("Negative Numbers aren't allowed");
                            setNumberOfBots(0);
                            return;
                          }
                          setNumberOfBots(parseInt(e.target.value));
                        }}
                      />{" "}
                      <label htmlFor="">Number of Bots</label>
                    </div>

                    <div className="div-form">
                      <label htmlFor="">Difficulty</label>
                      <select
                        name=""
                        id=""
                        value={difficulty}
                        onChange={(e) => {
                          setDifficulty(e.target.value);
                        }}
                      >
                        {bots.difficultyLevels.map((dif) => {
                          return (
                            <option
                              value={dif.title}
                              key={"difficulty-" + dif.title}
                            >
                              {dif.title}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="create-wordle-challenge-buttons">
              <button
                className="wordle-button btn-center"
                onClick={() => {
                  setCreateChallenge(false);
                }}
              >
                Cancel
              </button>
              <button
                className="wordle-button btn-center create-wordle-challenge-button"
                onClick={handleCreateChallenge}
              >
                Create Challange
              </button>{" "}
            </div>
          </>
        ) : (
          <>
            {!existingChallenge ? (
              <div className="div-challenges-lists">
                {otherChallenges.map((otherChallenge: ChallengeData, i) => (
                  <div
                    className="div-challenge-table-item"
                    key={"other-challenges-" + i}
                  >
                    <div
                      className={
                        "challenge-title random-background-" +
                        otherChallenge.theme
                      }
                    >
                      <div className="challenge-name">
                        <h3>{otherChallenge.name}</h3>
                        <span className="question">
                          ({otherChallenge.words.length} questions)
                        </span>
                      </div>
                    </div>
                    <div className="challenge-body">
                      <div className="challenge-settings">
                        <div className="challenge-book">
                          <strong>Books: </strong>
                          {otherChallenge?.settings.books.length === 0 ? (
                            <span>All</span>
                          ) : (
                            otherChallenge?.settings.books.map((chBook, i) => (
                              <span key={"existing-challenge-book-" + chBook}>
                                {chBook}
                                {""}
                                {i <
                                  otherChallenge?.settings.books.length - 1 &&
                                  ", "}
                              </span>
                            ))
                          )}
                        </div>

                        <div className="challenge-level">
                          <strong>Levels: </strong>
                          {otherChallenge?.settings.levels.length === 0 ? (
                            <span>All</span>
                          ) : (
                            otherChallenge?.settings.levels.map(
                              (chLevel, i) => (
                                <span
                                  key={"existing-challenge-level-" + chLevel}
                                >
                                  {chLevel}
                                  {""}
                                  {i <
                                    otherChallenge?.settings.levels.length -
                                      1 && ", "}
                                </span>
                              )
                            )
                          )}
                        </div>

                        <div className="challenge-unit">
                          <strong>Units: </strong>
                          {otherChallenge?.settings.units.length === 0 ? (
                            <span>All</span>
                          ) : (
                            otherChallenge?.settings.units.map((chUnits, i) => (
                              <span key={"existing-challenge-unit-" + chUnits}>
                                {chUnits}
                                {""}
                                {i <
                                  otherChallenge?.settings.units.length - 1 &&
                                  ", "}
                              </span>
                            ))
                          )}
                        </div>
                      </div>
                      <div
                        className="challenge-go-button"
                        onClick={() => {
                          window.location.replace(
                            "/wordle/challenges/" + otherChallenge.id
                          );
                        }}
                      >
                        <button className="wordle-button btn-center create-wordle-challenge-button">
                          Join{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="div-challenges-lists">
                <div className="div-challenge-table-item">
                  <div
                    className={
                      "challenge-title random-background-" +
                      existingChallenge.theme
                    }
                  >
                    <div className="challenge-name">
                      <h3>{existingChallenge.name}</h3>
                      <span className="question">
                        ({existingChallenge.words.length} questions)
                      </span>
                    </div>
                  </div>
                  <div className="challenge-body">
                    <div className="challenge-settings">
                      <div className="challenge-book">
                        <strong>Books: </strong>
                        {existingChallenge?.settings.books.length === 0 ? (
                          <span>All</span>
                        ) : (
                          existingChallenge?.settings.books.map((chBook, i) => (
                            <span key={"existing-challenge-book-" + chBook}>
                              {chBook}
                              {""}
                              {i <
                                existingChallenge?.settings.books.length - 1 &&
                                ", "}
                            </span>
                          ))
                        )}
                      </div>

                      <div className="challenge-level">
                        <strong>Levels: </strong>
                        {existingChallenge?.settings.levels.length === 0 ? (
                          <span>All</span>
                        ) : (
                          existingChallenge?.settings.levels.map(
                            (chLevel, i) => (
                              <span key={"existing-challenge-level-" + chLevel}>
                                {chLevel}
                                {""}
                                {i <
                                  existingChallenge?.settings.levels.length -
                                    1 && ", "}
                              </span>
                            )
                          )
                        )}
                      </div>

                      <div className="challenge-unit">
                        <strong>Units: </strong>
                        {existingChallenge?.settings.units.length === 0 ? (
                          <span>All</span>
                        ) : (
                          existingChallenge?.settings.units.map(
                            (chUnits, i) => (
                              <span key={"existing-challenge-unit-" + chUnits}>
                                {chUnits}
                                {""}
                                {i <
                                  existingChallenge?.settings.units.length -
                                    1 && ", "}
                              </span>
                            )
                          )
                        )}
                      </div>
                    </div>
                    <div className="challenge-go-button">
                      <button
                        className="wordle-button btn-center "
                        onClick={() => {
                          navigator.clipboard.writeText(window.location.href);
                          toast.success("Share Link Copied to the Clipboard");
                        }}
                        style={{ marginRight: "5px" }}
                      >
                        Share{" "}
                      </button>
                      <button
                        className="wordle-button btn-center create-wordle-challenge-button"
                        onClick={() => {
                          window.location.replace(
                            "/wordle/challenges/" + existingChallenge.id
                          );
                        }}
                      >
                        Go{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
