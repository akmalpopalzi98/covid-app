import { useContext, useState } from "react";
import { ScoreContext } from "../context/ScoreContext";

const QuestionCard = ({ data }) => {
  const { setScore } = useContext(ScoreContext);

  const optionslist = [data.answer, ...data.options];

  const onSelect = (event, number) => {
    const clickedButton = event.target;
    if (number === data.answer) {
      setScore((prevScore) => prevScore + 1);
      console.log(event.target);
      clickedButton.style.backgroundColor = "green";
    } else {
      clickedButton.style.backgroundColor = "red";
    }
  };
  const renderedItems = optionslist.map((number, index) => (
    <button
      key={index}
      style={{
        height: "90%",
        width: "20%",
      }}
      onClick={(event) => {
        onSelect(event, number);
      }}
    >
      {number}
    </button>
  ));

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "70%",
        width: "90%",
        border: "solid 6px black",
        borderRadius: "20px",
      }}
    >
      <h1 style={{ textAlign: "center", paddingTop: "10px" }}>
        {data.question}
      </h1>

      <div
        style={{
          display: "flex",
          width: "100%",
          height: "80%",
          justifyContent: "center",
          gap: "30px",
          alignItems: "center",
        }}
      >
        {renderedItems}
      </div>
    </div>
  );
};

export default QuestionCard;
