import { useContext, useState, useEffect } from "react";
import { ScoreContext } from "../context/ScoreContext";
import Modal from "./Modal";
import { ModalContext } from "../context/ModalContext";
import { QuestionContext } from "../context/QuestionContext";

const QuestionCard = ({ data }) => {
  const { setScore, isAnswered, setIsAnswered } = useContext(ScoreContext);
  const { openModal, setOpenModal } = useContext(ModalContext);
  const { index } = useContext(QuestionContext);

  const [isCorrect, setIsCorrect] = useState(null);
  const [buttonColors, setButtonColors] = useState(
    Array(data.options.length).fill("")
  ); // Initialize colors array

  const onSelect = (event, number, index) => {
    setIsAnswered(true);
    setOpenModal(true);
    const clickedButton = event.target;

    // Create a copy of the buttonColors array to update the state
    const newButtonColors = [...buttonColors];

    if (number === data.answer) {
      setScore((prevScore) => prevScore + 1);
      setIsCorrect(true);
      newButtonColors[index] = "green";
    } else {
      newButtonColors[index] = "red";
      setIsCorrect(false);
    }

    // Update the state with the new button colors
    setButtonColors(newButtonColors);
  };

  useEffect(() => {
    // Reset the isAnswered state when a new question is rendered
    setIsAnswered(false);
    // Reset button colors
    setButtonColors(Array(data.options.length).fill(""));
  }, [index]); // Trigger the effect when the data prop changes

  const renderedItems = data.options.map((number, index) => (
    <button
      key={index}
      style={{
        height: "90%",
        width: "20%",
        backgroundColor: buttonColors[index],
      }}
      onClick={(event) => {
        onSelect(event, number, index);
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
            onExit={() => setOpenModal(false)}
            correctStatus={isCorrect}
          />
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
