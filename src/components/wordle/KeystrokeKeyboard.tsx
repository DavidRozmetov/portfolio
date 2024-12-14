import React, { useEffect } from "react";
import { MdOutlineBackspace } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";

interface KeystrokeKeyboardProps {
  handleLetterInput: (letter: string) => void;
  checkGuess: () => void;
  setCurrentGuess: (guess: string) => void;
  currentGuess: string;
  word: string;
  keyStatus: { [key: string]: string };
}

const KeystrokeKeyboard: React.FC<KeystrokeKeyboardProps> = ({
  handleLetterInput,
  checkGuess,
  setCurrentGuess,
  currentGuess,
  word,
  keyStatus,
}) => {
  const getKeyClass = (letter: string) => {
    return keyStatus[letter] ? `key-${keyStatus[letter]}` : "";
  };

  // Handle keyboard events (keydown)
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase(); // Get the pressed key in lowercase

      // Handle letter keys (a-z)
      if (
        "qwertyuiopasdfghjklzxcvbnm".split("").includes(key) &&
        currentGuess.length < word.length
      ) {
        if (word.split("")[currentGuess.length + 1] === " ") {
          handleLetterInput(key + " ");
        } else if (word.split("")[currentGuess.length + 1] === "-") {
          handleLetterInput(key + "-");
        } else {
          handleLetterInput(key);
        }
      }

      // Handle backspace key
      if (key === "backspace") {
        setCurrentGuess(currentGuess.slice(0, -1));
      }

      // Handle enter key
      if (key === "enter") {
        checkGuess();
      }
    };

    // Attach event listener
    window.addEventListener("keydown", handleKeyPress);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentGuess, handleLetterInput, checkGuess, setCurrentGuess]);

  return (
    <div className="wordle-input-area">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="wordle-keyboard-row">
        {"qwertyuiop".split("").map((letter) => (
          <button
            key={letter}
            className={`wordle-input-button ${getKeyClass(letter)}`}
            onClick={() => handleLetterInput(letter)}
          >
            {letter.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="wordle-keyboard-row">
        {"asdfghjkl".split("").map((letter) => (
          <button
            key={letter}
            className={`wordle-input-button ${getKeyClass(letter)}`}
            onClick={() => handleLetterInput(letter)}
          >
            {letter.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="wordle-keyboard-row">
        <button
          className="wordle-input-button backspace"
          onClick={() => setCurrentGuess(currentGuess.slice(0, -1))}
        >
          <p>
            <MdOutlineBackspace />
          </p>
        </button>
        {"zxcvbnm".split("").map((letter) => (
          <button
            key={letter}
            className={`wordle-input-button ${getKeyClass(letter)}`}
            onClick={() => handleLetterInput(letter)}
          >
            {letter.toUpperCase()}
          </button>
        ))}

        <button className="wordle-input-button enter" onClick={checkGuess}>
          ENTER
        </button>
      </div>
    </div>
  );
};

export default KeystrokeKeyboard;
