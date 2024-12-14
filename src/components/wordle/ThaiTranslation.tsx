import React, { useEffect, useState } from "react";
import sendWordToLongdo from "../../firebase/sendWordToLongdo";

const LongdoSearch = (props: {
  word: string;
  handleDeductionUpdate: (score: -1 | 1, name: string) => void;
}) => {
  const word = props.word;
  const [thaiWords, setThaiWords] = useState<string[]>();

  const handleSearch = async () => {
    try {
      const data = await sendWordToLongdo(word);
      setThaiWords(data);

      if (data.length === 0) {
        setThaiWords([]);
      }
    } catch (error) {
      console.error("Error:", error);
      props.handleDeductionUpdate(+1, "Thai Translation");
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <div className="thai-words-container">
      <strong>Translation: </strong>
      <div>
        {thaiWords && thaiWords.length > 0 ? (
          thaiWords.map((word, index) => {
            return (
              <span className="btn-wordle" key={index}>
                {word.includes("<") ? word.split("<")[0] : word},
                {index < thaiWords.length - 1 && " "}
              </span>
            );
          })
        ) : !thaiWords ? (
          <div>Loading</div>
        ) : (
          <div>Couldn't find the word in Dictionary</div>
        )}
      </div>
    </div>
  );
};

export default LongdoSearch;
