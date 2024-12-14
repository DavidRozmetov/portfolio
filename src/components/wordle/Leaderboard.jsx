import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const LeaderBoard = (props) => {
  const table = props.table;
  const [uids, setUids] = useState([]);
  const [groupedTable, setGroupedTable] = useState([]);
  const [sortedTable, setSortedTable] = useState([]);

  const [filterTime, setFilterTuime] = useState("-");
  const [filterBook, setFilterBook] = useState("-");

  useEffect(() => {
    const newGroupedTable = Object.groupBy(table, ({ uid }) => uid);
    setGroupedTable(newGroupedTable);
  }, [table]);

  useEffect(() => {
    let newTable = [];
    Object.keys(groupedTable).map((itemId) => {
      let totalScore = 0;

      const itemArray = groupedTable[itemId];
      const totalGames = itemArray.length;
      itemArray.map((item) => {
        totalScore += item.score;
      });

      newTable.push({
        uid: itemId,
        name: itemArray[0].name,
        score: totalScore,
        games: totalGames,
      });
    });

    setSortedTable(newTable.sort((a, b) => b.score - a.score));
  }, [groupedTable]);

  return (
    <div className="leaderboard-modal-container">
      <div className="leaderboard-header-container">
        <h4>Leaderboard</h4>
        {/* <select name="" id="">
          <option value="-">All Time</option>
          <option value="year">This Year</option>
          <option value="month">This Month</option>
          <option value="week">This Week</option>
          <option value="day">Today</option>
        </select>

        <select name="" id="">
          <option value="-">All Books</option>
          <option value="-">Discover Futures</option>
          <option value="year">Business Result</option>
        </select> */}
      </div>
      <div className="leaderboard-table-container leaderboard-table-container-header">
        <p>#</p>
        <p>Name</p>
        <p>Wins</p>
        <p>Score</p>
      </div>
      <div className="leaderboard-list-container">
        {sortedTable.map((item, index) => (
          <div
            className={`leaderboard-table-container leaderboard-table-container-body ${
              props.personalUid === item.uid &&
              "leaderboard-table-container-own"
            }`}
            key={index}
          >
            <p>{index + 1}</p>
            <p>{item.name}</p>
            <p>{item.games}</p>
            <p>{item.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
