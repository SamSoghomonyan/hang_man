import React from "react";

const LetterCard = ({ letter, check, checkCLick }) => {
  return (
    <div>
      <div
        onClick={() => checkCLick(letter, check)}
        className={check ? "LetterCard" : "LetterCheck"}
      >
        <p className="p">{letter}</p>
      </div>
    </div>
  );
};

export default LetterCard;
