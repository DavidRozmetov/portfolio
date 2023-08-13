import React from "react";

const MoodComponent: React.FC<{ mood: string }> = ({ mood }) => {
  if (mood === "sleepy") {
    return (
      <div>
        <h1>Feeling Sleepy Zzz...</h1>
        <img src="sleeping_cat.gif" alt="Sleeping Cat" />
        <p>Time to take a nap!</p>
      </div>
    );
  } else if (mood === "hungry") {
    return (
      <div>
        <h1>Feeling Hungry Nom Nom...</h1>
        <img src="hungry_dog.gif" alt="Hungry Dog" />
        <p>Time to eat all the snacks!</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Ready to Code!</h1>
        <img src="coding_octopus.gif" alt="Coding Octopus" />
        <p>Time for coffee and coding marathons!</p>
      </div>
    );
  }
};

const App: React.FC = () => {
  const currentMood = "coding";
  return (
    <div className="App">
      <MoodComponent mood={currentMood} />
    </div>
  );
};

export default App;
