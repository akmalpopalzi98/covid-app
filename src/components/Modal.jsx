import { RxCross2 } from "react-icons/rx";
const Modal = ({ detail, onExit, correctStatus }) => {
  const messageStatus = correctStatus ? "Well Done!" : "Incorrect";
  return (
    <div
      style={{
        backgroundColor: "#273746",
        position: "absolute",
        color: "white",
        width: "40%",
        height: "40%",
        borderRadius: "5px",
        textAlign: "center",
      }}
    >
      <div style={{ position: "relative" }}>
        {detail} {messageStatus}
        <button
          style={{ position: "absolute", top: 0, right: 0 }}
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
