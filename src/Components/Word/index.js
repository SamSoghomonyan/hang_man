import React from "react";
const Word = ({ clickletter, value, letterCheck }) => {
  return (
    <div className="ContainerWord">
      <div>
        {clickletter.map((item) => {
          if (item == value) {
            letterCheck.push(value);
            return <h1 className="wordLetter">{value}</h1>;
          } else {
            return "";
          }
        })}
      </div>
    </div>
  );
};

export default Word;
