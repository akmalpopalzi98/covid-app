import { useContext, useState, useEffect } from "react";
import { ScoreContext } from "../context/ScoreContext";
import Modal from "./Modal";

const QuestionCard = ({ data }) => {
  const { setScore, isAnswered, setIsAnswered } = useContext(ScoreContext);
  const [openModal, setOpenModal] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const optionslist = [data.answer, ...data.options];

  const onSelect = (event, number) => {
    setIsAnswered(true);
    setOpenModal(true);
    const clickedButton = event.target;
    if (number === data.answer) {
      setScore((prevScore) => prevScore + 1);
      setIsCorrect(true);
      clickedButton.style.backgroundColor = "green";
    } else {
      clickedButton.style.backgroundColor = "red";
      setIsCorrect(false);
    }
  };

  useEffect(() => {
    // Reset the isAnswered state when a new question is rendered
    setIsAnswered(false);
    const buttonElement = (document.getElementById(
      "answer-btn"
    ).style.backgroundColor = "");
  }, [data]); // Trigger the effect when the data prop changes
  const renderedItems = optionslist.map((number, index) => (
    <button
      id="answer-btn"
      key={index}
      style={{
        height: "90%",
        width: "20%",
      }}
      onClick={(event) => {
        onSelect(event, number);
      }}
      disabled={isAnswered}
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
        position: "relative",
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
        {openModal && (
          <Modal
            detail={data.detail}
            onExit={setOpenModal}
            correctStatus={isCorrect}
          />
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
