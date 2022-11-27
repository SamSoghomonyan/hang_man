import React, { useState, useEffect } from "react";
import { Data, Letter } from "../../Constatnt";

import LetterCard from "../LetterCard";
import Word from "../Word";
import GameOver from "../GameOver";

import step0 from "./../Images/0.jpg";
import step1 from "./../Images/1.jpg";
import step2 from "./../Images/2.jpg";
import step3 from "./../Images/3.jpg";
import step4 from "./../Images/4.jpg";
import step5 from "./../Images/5.jpg";
import step6 from "./../Images/6.jpg";
const images = [step0, step1, step2, step3, step4, step5, step6];
const Game = () => {
  const [data, setData] = useState(Letter);
  const [clickletter, setClickLetter] = useState([]);
  const [letterCheck, setLetterCheck] = useState([]);
  const [wrong, setwrong] = useState(0);
  useEffect(() => {
    const letter = letterCheck.filter((item, index) => {
      return letterCheck.indexOf(item) == index;
    });
    setwrong(clickletter.length - letter.length);
  }, [clickletter]);
  const playAgain = () => {
    setwrong(0);
    setClickLetter([]);
    setLetterCheck([]);
    data.map((item) => {
      if (!item.check) {
        item.check = true;
        return item;
      }
      return item;
    });
  };
  console.log("wrong :>> ", wrong);
  const checkCLick = (leter, check) => {
    if (check) {
      data.map((item) => {
        if (item.letter === leter) {
          item.check = false;
          return item;
        }
        return item;
      });
      setClickLetter([...clickletter, leter]);
    }
  };
  return (
    <div>
      {wrong === 7 ? (
        <div>
          <GameOver />
          <button className="button" onClick={playAgain}>
            Play Again
          </button>
        </div>
      ) : (
        <div className="globalContainer">
          <div>
            <img className="images" src={images[wrong]} />
          </div>
          <div className="WordDiv">
            <h1 className="title">{Data[0].promtWord}</h1>
            <br />
            <div className="word">
              {Data[0].word.split("").map((item, index) => {
                return (
                  <Word
                    kkey={index}
                    value={item}
                    letterCheck={letterCheck}
                    clickletter={clickletter}
                  />
                );
              })}
            </div>
            <button className="button" onClick={playAgain}>
              Play Again
            </button>
          </div>
          <div>
            <div className="containerLetterCard">
              {data.map((item, index) => {
                return (
                  <LetterCard checkCLick={checkCLick} key={index} {...item} />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
