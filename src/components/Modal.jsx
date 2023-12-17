import { RxCross2 } from "react-icons/rx";
const Modal = ({ detail, onExit, correctStatus }) => {
  const messageStatus = correctStatus ? "Well Done!" : "Incorrect";
  return (
    <div
      style={{
        backgroundColor: "#273746",
        position: "absolute",
        color: "white",
        width: "60%",
        height: "60%",
        borderRadius: "5px",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div style={{ position: "relative" }}>
        {detail} {messageStatus}
        <button
          style={{ position: "absolute", top: -20, right: -20 }}
          onClick={() => {
            onExit(false);
          }}
        >
          <RxCross2 />
        </button>
      </div>
    </div>
  );
};

export default Modal;
