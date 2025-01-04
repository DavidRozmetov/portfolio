import { Rabbit } from "./Rabbit";
import track from "../../../assets/img/wordle/track.jpg";
import finish from "../../../assets/img/wordle/finish.jpg";

import { useEffect, useState } from "react";

export const BunnyRace = (props) => {
  const [table, setTable] = useState();
  const [rabbitVisibility, setRabbitVisibility] = useState([]); // Track visibility for each Rabbit

  useEffect(() => {
    if (props.challengeInfo) {
      const players = props.challengeInfo?.players;
      let cutOutTime = 0;
      let newTable = [];

      const activePlayer = players.find(
        (a) => a.uid === window.sessionStorage.getItem("WordleUID")
      );
      cutOutTime =
        (activePlayer.timeline[activePlayer.timeline.length - 1].seconds
          ? activePlayer.timeline[activePlayer.timeline.length - 1].seconds *
            1000
          : activePlayer.timeline[activePlayer.timeline.length - 1] -
            activePlayer.timeline[0].seconds * 1000) /
          1000 +
        5;

      players?.map((pl) => {
        const newData = {
          userName: pl.userName,
          uid: pl.uid,
        };
        let newTimeLineArray = [0];
        pl.timeline.map((time, i) => {
          if (
            i > 0 &&
            time &&
            (time - pl.timeline[0] < cutOutTime || pl.uid === activePlayer.uid)
          ) {
            newTimeLineArray.push(time - pl.timeline[0]);
          }
        });
        const averageSpeed = Math.floor(
          newTimeLineArray[newTimeLineArray.length - 1] /
            (newTimeLineArray.length - 1)
        );
        newData.averageSpeed = averageSpeed;
        newData.difficulty = pl.difficulty;
        newData.steps = newTimeLineArray.length - 1;
        newData.totalSteps = props.challengeInfo.words.length;
        newTable.push(newData);
      });

      const speedTable = newTable
        .map((pl) => pl.averageSpeed)
        .sort((a, b) => a - b);

      const stepsTable = newTable
        .map((pl) => {
          return {
            uid: pl.uid,
            currentStep: pl.steps,
            averageSpeed: pl.averageSpeed,
          };
        })
        .sort((a, b) => a.averageSpeed - b.averageSpeed)
        .sort((a, b) => b.currentStep - a.currentStep);

      newTable.map((pl) => {
        pl.rank = stepsTable.map((a) => a.uid).indexOf(pl.uid);
      });

      setTable(newTable);

      // Set up visibility for each rabbit with delays
      const visibilityArray = new Array(players.length).fill(false);
      players.forEach((_, index) => {
        setTimeout(() => {
          setRabbitVisibility((prev) => {
            const newVisibility = [...prev];
            newVisibility[index] = true;
            return newVisibility;
          });
        }, index * 500); // 500ms delay between each Rabbit
      });
    }
  }, [props.challengeInfo]);

  return (
    <div className="bunny-race-container">
      <div className="track-container">
        <img src={track} alt="" className="img-track" />
        <img src={finish} alt="" className="img-finish" />
        <div className="player-names-container">
          {table &&
            table.map((playerData, index) => (
              <>
                <div className="div-player-name ">
                  <div className={"div-rank"}>
                    <h4
                      className={
                        "div-player-name-header div-rank-header " +
                        "random-background-" +
                        (playerData.rank + 1)
                      }
                    >
                      {playerData.rank + 1}
                    </h4>
                  </div>
                  <h3
                    className={
                      "div-player-name-header " +
                      "random-background-" +
                      (index + 1)
                    }
                  >
                    {playerData.userName}
                  </h3>
                </div>
              </>
            ))}
        </div>

        {table &&
          table
            .sort((a, b) => {
              // First, place the actual user at the top
              if (a.uid === window.sessionStorage.getItem("WordleUID"))
                return -1;
              if (b.uid === window.sessionStorage.getItem("WordleUID"))
                return 1;

              // Then, sort bots by difficulty (humans have no difficulty property)
              const aIsBot = a.difficulty !== undefined;
              const bIsBot = b.difficulty !== undefined;

              if (aIsBot && bIsBot) {
                // If both are bots, sort alphabetically by userName
                return a.userName.localeCompare(b.userName);
              }

              if (aIsBot) {
                return 1; // If 'a' is a bot and 'b' is not, move 'a' after 'b'
              }

              if (bIsBot) {
                return -1; // If 'b' is a bot and 'a' is not, move 'b' after 'a'
              }

              return 0; // If neither are bots, they are humans and remain in original order
            })
            .map((playerData, index) =>
              rabbitVisibility[index] ? (
                <Rabbit
                  key={playerData.uid}
                  position="idle"
                  track={index + 1}
                  xAxis={-20} // Initial position at start of track
                  playerData={playerData}
                />
              ) : null
            )}
      </div>
    </div>
  );
};
