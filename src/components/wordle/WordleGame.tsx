import React, { useEffect, useRef, useState } from "react";
import "./Wordle.css";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdShare } from "react-icons/io";

import { GiRank3 } from "react-icons/gi";

import { FaChevronCircleDown, FaRegLightbulb } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

import KeystrokeKeyboard from "./KeystrokeKeyboard";
import { toast, ToastContainer } from "react-toastify";
import ConfettiExplosion from "react-confetti-explosion";

import { db } from "./db";
import { Settings } from "./Settings";
import SearchParamWatcher from "./SearchParamWatcher";
import PexelsSearch from "./PexelsSearch";
import { getDocument, updateScoreBoard } from "../../firebase/database";

import CountUp from "react-countup";
import { LeaderBoard } from "./Leaderboard";
import LongdoSearch from "./ThaiTranslation";
import { fetchWordDetails } from "../../firebase/fetchWordDetails";
import { PopularCourses } from "../PopularCourses";

// Define types for the tile states
type TileState = "empty" | "green" | "yellow" | "gray" | "white" | "hidden";

interface ProcessedData {
  meanings: string[];
  synonyms: string[];
  antonyms: string[];
  examples: string[];
}

interface Deduction {
  name: string;
  value: number;
}

interface WordApiData {
  definition: string;
  derivation: string[] | null;
  partOfSpeech: string;
  similarTo: string[] | null;
  synonyms: string[] | null;
  antonyms: string[] | null;
  hasTypes: string[] | null;
  examples: string[] | null;
  partOf: string[] | null;
  instanceOf: string[] | null;
  also: string[] | null;
  hasInstances: string[] | null;
  memberOf: string[] | null;
  hasMembers: string[] | null;
  hasParts: string[] | null;
}
export interface License {
  name: string;
  url: string;
}
export interface Phonetic {
  text: string;
  audio?: string;
  sourceUrl?: string;
  license?: License;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

export interface Definition {
  definition: string;
  example?: string;
  synonyms: string[];
  antonyms: string[];
}

export interface WordData {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
}
interface TileProps {
  letter: string;
  state: TileState;
}
interface OriginProps {
  book: string;
  level: string;
  unit: string;
}
interface ScoreBoardProps {
  name: string;
  uid: string;
  word: string;
  score: number;
  date: Date;
  source: {
    book: string;
    level: string;
    unit: string;
  };
}

const Tile: React.FC<TileProps> = ({ letter, state }) => {
  return (
    <div className={`wordle-tile ${state}`}>
      {letter ? letter.toUpperCase() : ""}
    </div>
  );
};

const WordleGame: React.FC = () => {
  let wordPicked = false;
  const [word, setWord] = useState<string>("");
  const [definition, setDefinition] = useState<string>("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [hint, setHint] = useState<boolean>(true);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [toggleFeedback, setToggleFeedback] = useState<boolean>(false);
  const [toggleViewSettings, setViewSettings] = useState<boolean>(false);
  const [originInfo, setOriginInfo] = useState<OriginProps>();
  const [toggleViewImg, setViewImage] = useState<boolean>(false);
  const [toggleViewExample, setViewExample] = useState<boolean>(false);
  const [toggleLeaderboard, setLeaderboard] = useState<boolean>(false);
  const [toggleThai, setToggleThai] = useState<boolean>(false);
  const [toggleViewConnectedWords, setViewConnectedWords] =
    useState<boolean>(false);
  const wordInitialized = useRef(false);
  const [moreMeanings, setMoreMeanings] = useState<boolean>(false);

  let uid: string | null;
  uid = window.localStorage.getItem("WordleUID");

  const [keyStatus, setKeyStatus] = React.useState<{ [key: string]: string }>(
    {}
  );
  const [revealedIndices, setRevealedIndices] = useState<number[]>([]);

  const [filterBooks, setFilterBooks] = useState<string[]>([]);
  const [filterLevels, setFilterLevels] = useState<string[]>([]);
  const [filterUnits, setFilterUnits] = useState<string[]>([]);

  const [wordAPIData, setWordAPIData] = React.useState<WordApiData[]>();
  const [similarTo, setSimilarTo] = React.useState<string[]>([]);
  const [synonyms, setSynonyms] = React.useState<string[]>([]);
  const [antonyms, setAntonyms] = React.useState<string[]>([]);
  const [examples, setExamples] = useState<string[]>([]);

  const [deductions, setDeductions] = useState<Deduction[]>([]);

  const [name, setName] = useState<string>("");
  const [score, setScore] = useState<number>(10);
  const [scoreboard, setScoreBoard] = useState<ScoreBoardProps[]>([]);

  const updateKeyStatus = (guess: string[], feedback: string[]) => {
    setKeyStatus((prevStatus) => {
      const newStatus = { ...prevStatus };

      guess.forEach((letter, index) => {
        const feedbackType = feedback[index]; // e.g., 'green', 'yellow', or 'gray'
        if (
          feedbackType === "green" ||
          (feedbackType === "yellow" && newStatus[letter] !== "green")
        ) {
          newStatus[letter] = feedbackType;
        } else if (!newStatus[letter]) {
          newStatus[letter] = feedbackType; // Set 'gray' only if no status exists
        }
      });

      return newStatus;
    });
  };

  const handleLetterInput = (letter: string) => {
    if (currentGuess.length < word.length) {
      setCurrentGuess(currentGuess + letter);
    }
  };

  const checkGuess = () => {
    if (currentGuess.length < word.length) {
      toast.warn("Please enter a " + word.length + "-letter word.");
      return;
    }

    const feedback = generateFeedback(currentGuess, word);

    // Update key statuses
    updateKeyStatus(currentGuess.split(""), feedback);

    const newGuesses = [...guesses, currentGuess];
    setGuesses(newGuesses);
    setCurrentGuess("");
    revealTiles(newGuesses.length - 1);
    let newScore: number = score;

    // Handle win/lose or move to the next row
    if (currentGuess === word) {
      toast.success("Congratulations, you guessed correctly!");

      setIsGameOver(true);

      if (uid) {
        handleAddToScoreBoard();
      }
      setToggleFeedback(false);
      setTimeout(() => {
        setToggleFeedback(true);
      }, 2000);
    } else if (guesses.length === 5) {
      toast.error(`Game over! The correct word was ${word}`);
      setIsGameOver(true);
      setToggleFeedback(true);
    }
  };
  const getTileState = (guessIndex: number, tileIndex: number) => {
    const guess = guesses[guessIndex] || "";

    if (guess === "") {
      return "empty";
    }
    if (guess[tileIndex] === word[tileIndex]) {
      // updateKeyStatus(guess.split(""), ["green"]);
      return "green";
    }
    if (word.includes(guess[tileIndex])) {
      return "yellow";
    }
    if (guess[tileIndex] === "") {
      return "empty";
    }
    return "gray";
  };

  const fetchWordData = async (word: string): Promise<ProcessedData> => {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data: WordData[] = await response.json();

    if (data && data.length > 0) {
      return processWordData(data[0]);
    } else {
      toast.error("No data found for the given word");
      return {
        meanings: [""],
        synonyms: [""],
        antonyms: [""],
        examples: [""],
      };
    }
  };

  const processWordData = (data: WordData): ProcessedData => {
    const meanings: string[] = [];
    const synonyms: string[] = [];
    const antonyms: string[] = [];
    const examples: string[] = [];

    data.meanings.forEach((meaning) => {
      meaning.definitions.forEach((definition) => {
        meanings.push(definition.definition);
        if (definition.example) examples.push(definition.example);
        synonyms.push(...definition.synonyms);
        antonyms.push(...definition.antonyms);
      });

      synonyms.push(...meaning.synonyms);
      antonyms.push(...meaning.antonyms);
    });

    return {
      meanings,
      synonyms: Array.from(new Set(synonyms)), // Remove duplicates
      antonyms: Array.from(new Set(antonyms)), // Remove duplicates
      examples,
    };
  };

  const generateFeedback = (guess: string, correctWord: string): string[] => {
    const feedback = Array(guess.length).fill("gray"); // Default to "gray"
    const correctWordArray = correctWord.split("");
    const guessArray = guess.split("");

    // Mark green (correct placement)
    guessArray.forEach((letter, index) => {
      if (letter === correctWordArray[index]) {
        feedback[index] = "green";
        correctWordArray[index] = null as any; // Avoid reusing letters
      }
    });

    // Mark yellow (misplaced)
    guessArray.forEach((letter, index) => {
      if (feedback[index] === "gray" && correctWordArray.includes(letter)) {
        feedback[index] = "yellow";
        correctWordArray[correctWordArray.indexOf(letter)] = null as any; // Avoid reuse
      }
    });

    return feedback;
  };

  const revealTiles = (guessIndex: number) => {
    const totalTiles = word.length; // Exclude spaces
    let currentTile = -1;
    setRevealedIndices([]);

    const revealInterval = setInterval(() => {
      setRevealedIndices((prev) => [...prev, currentTile]);

      currentTile += 1;

      if (currentTile >= totalTiles) {
        clearInterval(revealInterval);
      }
    }, 300); // Adjust delay between reveals (300ms in this case)
  };

  function chooseRandomWord() {
    // Filter words based on optional parameters
    const filteredWords = db.filter((word) => {
      const matchesBook =
        filterBooks.length > 0 ? filterBooks.includes(word.book) : true;
      const matchesLevel =
        filterLevels.length > 0 ? filterLevels.includes(word.level) : true;
      const matchesUnit =
        filterUnits.length > 0 ? filterUnits.includes(word.unit) : true;
      const matchesLength =
        window.innerWidth < 500 ? word.word.length <= 9 : true;
      return matchesBook && matchesUnit && matchesLevel && matchesLength;
    });

    // If no matching words are found, return null
    if (filteredWords.length === 0) {
      toast.error("No word Matches these things");
      return { word: "", definition: "" };
    }

    // Select a random word from the filtered list
    const randomIndex = Math.floor(Math.random() * filteredWords.length);

    setOriginInfo({
      book: filteredWords[randomIndex].book,
      level: filteredWords[randomIndex].level,
      unit: filteredWords[randomIndex].unit,
    });

    return {
      word: filteredWords[randomIndex].word,
      definition: filteredWords[randomIndex].definition,
    };
  }
  const initializeWord = async () => {
    if (wordInitialized.current) return; // Avoid re-initialization
    wordInitialized.current = true;

    const newWord = chooseRandomWord();
    setWord(newWord.word);
    setDefinition(newWord.definition);

    try {
      const res = await getDocument("wordle", "scoreboard");
      if (res.success) {
        setScoreBoard(res.data.scoreboard);
      } else {
        toast.error("Couldn't load the scoreboard");
      }
    } catch (error) {
      toast.error("Failed to fetch the scoreboard.");
    }
  };

  const fetchAndSetWordDetails = async (currentWord: string) => {
    try {
      const details = await fetchWordDetails(currentWord);
      if (details && details.word.toLowerCase() === currentWord.toLowerCase()) {
        setWordAPIData(details.results);
      }
    } catch (error) {
      toast.error("Error fetching word details.");
    }
  };

  useEffect(() => {
    // Call API when `word` changes
    if (word) {
      fetchAndSetWordDetails(word);
    }
  }, [word]);

  // useEffect(() => {
  //   // Use a function to encapsulate logic for clarity
  //   if (!wordPicked) {
  //     initializeWord();
  //     wordPicked = true;
  //   } else {
  //     return;
  //   }
  // }, [filterBooks, filterLevels, filterUnits]);

  useEffect(() => {
    // Initialize the word strictly once
    initializeWord();
  }, []);

  useEffect(() => {
    let tempSimilarTo: string[] = [];
    let tempSynonyms: string[] = [];
    let tempAntonyms: string[] = [];
    let tempExamples: string[] = [];

    wordAPIData?.map((definition: WordApiData) => {
      if (
        definition?.examples &&
        definition?.examples !== undefined &&
        definition?.examples?.length > 0
      ) {
        return definition.examples.map((wrd: string) => {
          if (!wrd.includes(word) && wrd !== undefined) {
            if (!tempExamples.includes(wrd)) {
              tempExamples.push(wrd);
            }
          }
        });
      } else {
      }
    });

    wordAPIData?.map((definition: WordApiData) => {
      if (
        definition?.similarTo &&
        definition?.similarTo !== undefined &&
        definition?.similarTo?.length > 0
      ) {
        return definition.similarTo.map((wrd: string) => {
          if (!wrd.includes(word) && wrd !== undefined) {
            if (!tempSimilarTo.includes(wrd)) {
              tempSimilarTo.push(wrd);
            }
          }
        });
      } else {
      }
    });

    wordAPIData?.map((definition: WordApiData) => {
      if (
        definition?.synonyms &&
        definition?.synonyms !== undefined &&
        definition?.synonyms?.length > 0
      ) {
        return definition.synonyms.map((wrd: string) => {
          if (!wrd.includes(word) && wrd !== undefined) {
            if (!tempSynonyms.includes(wrd)) {
              tempSynonyms.push(wrd);
            }
          }
        });
      }
    });

    wordAPIData?.map((definition: WordApiData) => {
      if (
        definition?.antonyms &&
        definition?.antonyms !== undefined &&
        definition?.antonyms?.length > 0
      ) {
        return definition.antonyms.map((wrd: string) => {
          if (!wrd.includes(word) && wrd !== undefined) {
            if (!tempAntonyms.includes(wrd)) {
              tempAntonyms.push(wrd);
            }
          }
        });
      }
    });

    setSimilarTo(tempSimilarTo);
    setSynonyms(tempSynonyms);
    setAntonyms(tempAntonyms);
    setExamples(tempExamples);
  }, [wordAPIData]);
  const handleAddToScoreBoard = () => {
    const scrbrd: any = [...scoreboard];

    let newData = {};
    if (uid) {
      const userData = scrbrd.find((a: any) => a.uid === uid);
      newData = {
        uid: uid,
        name: userData.name,
        word: word,
        score: score,
        date: new Date(),
        source: originInfo,
      };
    } else {
      const randomUid = uuidv4();
      uid = randomUid;
      window.localStorage.setItem("WordleUID", randomUid);
      newData = {
        uid: uid,
        name: name,
        word: word,
        score: score,
        date: new Date(),
        source: originInfo,
      };
    }

    scrbrd.push(newData);
    setScoreBoard(scrbrd);

    updateScoreBoard({
      scoreboard: scrbrd,
    }).then((res) => {
      if (!res.success) {
        toast.error("Couldn't update the document");
        return;
      }
      toast.success("Record added successfully");
    });
  };

  const handleDeductionUpdate = (score: -1 | 1, name: string) => {
    let oldDeductions = [...deductions];
    if (score === -1) {
      if (!oldDeductions.find((a) => a.name === name)) {
        oldDeductions.push({
          name: name,
          value: -1,
        });
      }

      setDeductions(oldDeductions);
    } else {
      oldDeductions = oldDeductions.filter((a) => a.name !== name);
      setDeductions(oldDeductions);
    }
  };

  useEffect(() => {
    setScore(10 - deductions.length - guesses.length);
  }, [deductions, guesses]);

  return (
    <div className="wordle-container">
      <SearchParamWatcher
        setFilterBooks={setFilterBooks}
        setFilterLevels={setFilterLevels}
        setFilterUnits={setFilterUnits}
      />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
      {guesses[guesses.length - 1] === word && (
        <ConfettiExplosion
          zIndex={4}
          height={"120vh"}
          width={10000}
          particleCount={200}
        />
      )}
      {/* Word Grid */}

      {/* Guess and Feedback Button */}
      <div className="wordle-buttons">
        <button
          className="wordle-button"
          onClick={() => {
            setLeaderboard(true);
          }}
        >
          <GiRank3 />
        </button>
        <button
          className="wordle-button"
          onClick={() => {
            setViewSettings(true);
          }}
        >
          <IoSettingsOutline />
        </button>

        <button
          className={`wordle-button ${hint ? "disabled" : ""}`}
          onClick={() => setHint(true)}
        >
          <FaRegLightbulb />
        </button>
        {!isGameOver ? (
          <button
            className="wordle-button"
            onClick={() => {
              setIsGameOver(true);
              setToggleFeedback(true);
            }}
          >
            Give Up
          </button>
        ) : (
          <button
            className="wordle-button"
            onClick={() => {
              window.location.reload();
            }}
          >
            New Game
          </button>
        )}
      </div>

      <div
        className="wordle-word-grid"
        style={{ gridTemplateColumns: `repeat( ${word.length}, 1fr)` }}
      >
        {Array.from({ length: 6 }).map((_, guessIndex) => {
          const guess = guesses[guessIndex] || "";

          return guesses.length === guessIndex ? (
            // Current guess
            <React.Fragment key={`current-${guessIndex}`}>
              {word.split("").map((letter, tileIndex) => {
                const currentLetter = currentGuess[tileIndex] || "";

                return letter === " " ? (
                  <div
                    key={`space-${tileIndex}`}
                    className="wordle-tile space"
                  />
                ) : letter === "-" ? (
                  <div key={`space-${tileIndex}`} className="wordle-tile space">
                    -
                  </div>
                ) : (
                  <Tile
                    key={`current-${tileIndex}`}
                    letter={currentLetter}
                    state="empty"
                  />
                );
              })}
            </React.Fragment>
          ) : (
            // Past guesses
            <React.Fragment key={`${guess}-${guessIndex}`}>
              {word.split("").map((letter, tileIndex) => {
                const guessLetter = guess[tileIndex] || "";

                return letter === " " ? (
                  <div
                    key={`space-${tileIndex}`}
                    className="wordle-tile space"
                  />
                ) : letter === "-" ? (
                  <div key={`space-${tileIndex}`} className="wordle-tile space">
                    -
                  </div>
                ) : (
                  <Tile
                    key={`${guessIndex}-${tileIndex}`}
                    letter={guessLetter}
                    state={
                      guessIndex !== guesses.length - 1 || isGameOver
                        ? getTileState(guessIndex, tileIndex)
                        : revealedIndices.includes(tileIndex) &&
                          guessIndex === guesses.length - 1
                        ? getTileState(guessIndex, tileIndex)
                        : "empty"
                    }
                  />
                );
              })}
            </React.Fragment>
          );
        })}

        {/* Render current guess tiles */}
      </div>

      {/* Input Area (Keyboard) */}

      {!isGameOver && (
        <KeystrokeKeyboard
          handleLetterInput={handleLetterInput}
          checkGuess={checkGuess}
          currentGuess={currentGuess}
          setCurrentGuess={setCurrentGuess}
          word={word}
          keyStatus={keyStatus}
        />
      )}

      {toggleViewSettings && (
        <Settings
          setViewSettings={setViewSettings}
          db={db}
          filterBooks={filterBooks}
          filterLevels={filterLevels}
          filterUnits={filterUnits}
        />
      )}

      {/* Modal for definition */}
      {hint && (
        <div className="wordle-modal open">
          <div
            className="wordle-hint-closer"
            onClick={() => {
              setHint(false);
            }}
          ></div>
          <div className="wordle-modal-content">
            <div className="wordle-modal-header">
              <div className="wordle-modal-title">Hint</div>
            </div>
            <div className="wordle-modal-body">
              <div>
                <p>
                  <b>Definition: </b>
                  {definition}
                </p>
                {wordAPIData && wordAPIData.length > 0 && (
                  <div
                    className="div-view-more"
                    onClick={() => {
                      setMoreMeanings(true);
                      handleDeductionUpdate(-1, "More Definitions");
                    }}
                  >
                    <p className="text-view-more">
                      {!moreMeanings && "View"} More Definitions (-1 point)
                    </p>
                    <button className="wordle-button">
                      {!moreMeanings && <FaChevronCircleDown />}
                    </button>
                  </div>
                )}

                {moreMeanings && (
                  <div className="div-more-meaings">
                    {wordAPIData?.map((definition: WordApiData, i) => {
                      return (
                        <p key={"definition" + i}>
                          ({definition.partOfSpeech}) {"\t"}{" "}
                          {definition.definition.replaceAll(
                            word,
                            "_ _ _ _ _ _"
                          )}
                        </p>
                      );
                    })}
                  </div>
                )}

                {(similarTo?.length > 0 ||
                  synonyms?.length > 0 ||
                  antonyms?.length > 0) && (
                  <div
                    className="div-view-more"
                    onClick={() => {
                      setViewConnectedWords(true);
                      handleDeductionUpdate(-1, "Connected Words");
                    }}
                  >
                    <p className="text-view-more">
                      {!toggleViewConnectedWords && "View"} Connected Words (-1
                      point)
                    </p>

                    {!toggleViewConnectedWords && (
                      <button className="wordle-button">
                        <FaChevronCircleDown />
                      </button>
                    )}
                  </div>
                )}
                {toggleViewConnectedWords && (
                  <div className="div-more-meaings">
                    {similarTo && similarTo?.length > 0 && (
                      <strong>Similar to: </strong>
                    )}{" "}
                    {similarTo?.map((wrd, index) => {
                      if (!wrd.includes(word) && index < 5) {
                        return <button key={wrd + index}>{wrd}</button>;
                      }
                    })}
                    <br />
                    {synonyms && synonyms?.length > 0 && (
                      <strong>Synonyms: </strong>
                    )}{" "}
                    {synonyms?.map((wrd, index) => {
                      if (!wrd.includes(word) && index < 5) {
                        return <button key={wrd + index}>{wrd}</button>;
                      }
                    })}
                    <br />
                    {antonyms && antonyms?.length > 0 && (
                      <strong>Antonyms: </strong>
                    )}{" "}
                    {antonyms?.map((wrd, index) => {
                      if (!wrd.includes(word) && index < 5) {
                        return <button key={wrd + index}>{wrd}</button>;
                      }
                    })}
                    <br />
                  </div>
                )}
              </div>

              {examples.length > 0 && (
                <div
                  className="div-view-more"
                  onClick={async () => {
                    setViewExample(true);
                    handleDeductionUpdate(-1, "Examples");

                    let newScore = score;
                  }}
                >
                  <p className="text-view-more">
                    {!toggleViewExample && "View"} Examples (-1 point)
                  </p>
                  <button className="wordle-button">
                    <FaChevronCircleDown />
                  </button>
                </div>
              )}
              {toggleViewExample && (
                <div>
                  {examples.length > 0 ? (
                    examples?.map((wrd, index) => {
                      if (!wrd.includes(word) && index < 5) {
                        return <p key={wrd + index}>{wrd}</p>;
                      }
                    })
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              )}

              {toggleViewImg ? (
                <PexelsSearch query={definition} query2={word} />
              ) : (
                <div
                  className="div-view-more"
                  onClick={() => {
                    setViewImage(true);
                    handleDeductionUpdate(-1, "Image");
                    let newScore = score;
                  }}
                >
                  <p className="text-view-more">View Images (-1 point)</p>
                  <button className="wordle-button">
                    <FaChevronCircleDown />
                  </button>
                </div>
              )}

              {wordAPIData && wordAPIData.length > 0 && (
                <div
                  className="div-view-more"
                  onClick={() => {
                    setToggleThai(true);
                    handleDeductionUpdate(-1, "Thai Translation");
                  }}
                >
                  <p className="text-view-more">
                    View Thai Translations (-1 point)
                  </p>
                  <button className="wordle-button">
                    <FaChevronCircleDown />
                  </button>
                </div>
              )}

              {toggleThai && (
                <LongdoSearch
                  word={word}
                  handleDeductionUpdate={handleDeductionUpdate}
                />
              )}
            </div>

            <div className="word-info">
              <strong>Source: </strong>
              {originInfo?.book}, {originInfo?.level}, {originInfo?.unit}
            </div>
          </div>
        </div>
      )}

      {isGameOver && toggleFeedback && (
        <div className="wordle-feedback-message">
          <div
            className="closer-div"
            onClick={() => {
              setToggleFeedback(false);
            }}
          ></div>
          <div className="feedback-bg">
            {guesses[guesses.length - 1] === word ? (
              <>
                <h3 className="correct">Well Done!</h3>
                <h2>
                  {" "}
                  <CountUp end={score + 1} duration={1} delay={0.1} /> / 10
                </h2>
                <div className="point-deduction">
                  {guesses.length > 1 && (
                    <>
                      <p>
                        {guesses.length - 1} Wrong Guess
                        {guesses.length > 2 && "es"}:{" "}
                      </p>
                      <p>
                        -{guesses.length - 1} point{guesses.length > 2 && "s"}
                      </p>
                    </>
                  )}
                  {deductions.map((dd: Deduction) => {
                    return (
                      <>
                        <p>{dd.name} :</p>
                        <p>{dd.value} point</p>
                      </>
                    );
                  })}
                </div>
                {!uid && (
                  <div className="div-name-input">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                    <button onClick={handleAddToScoreBoard}>Submit</button>
                  </div>
                )}

                <div className="game-win-buttons">
                  <button
                    onClick={() => {
                      window.location.reload();
                    }}
                  >
                    New Game
                  </button>

                  <button
                    className=" btn-share"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      toast.success("Url copied successfully");
                    }}
                  >
                    <IoMdShare />
                    <p>Challenge a friend</p>
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3>Game Over</h3>
                <p>
                  {" "}
                  <span className="regular">The correct word was</span>
                  <span className="absent"> {word}</span>
                </p>
                <div className="lose-buttons">
                  <button
                    className="wordle-button btn-center"
                    onClick={() => {
                      window.location.reload();
                    }}
                  >
                    New Game
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {toggleLeaderboard && (
        <div className="leaderboard-container">
          <div
            className="leaderboard-closer"
            onClick={() => {
              setLeaderboard(false);
            }}
          ></div>
          <LeaderBoard table={scoreboard} personalUid={uid} />
        </div>
      )}
    </div>
  );
};

const WordleApp: React.FC = () => {
  return (
    <div>
      <WordleGame />
      <h3>
        If you love the game, you'll absolutely enjoy my private English
        lessons!
      </h3>
      <PopularCourses />
    </div>
  );
};

export default WordleApp;
