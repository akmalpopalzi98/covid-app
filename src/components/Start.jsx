import { useContext } from "react";
import image from "../assets/7643692_24746.jpg";

const Start = ({ setIsStart }) => {
  return (
    <div
      style={{
        height: "73%",
        width: "92%",
        backgroundColor: "rgba(131,145,146,1)",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "30px",
        borderRadius: "20px",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <h2 style={{ textAlign: "center", color: "white" }}>
        COVID Conquerors: The Knowledge Showdown
      </h2>
      <div
        style={{
          display: "flex",
          gap: "5px",
          justifyContent: "space-evenly",
        }}
      >
        <label style={{ color: "white" }}>Please Enter Your Name</label>
        <input />
      </div>
      <button
        onClick={() => {
          setIsStart(false);
        }}
      >
        Start
      </button>
    </div>
  );
};

export default Start;
