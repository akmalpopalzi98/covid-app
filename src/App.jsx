import "./app.css";
import { GiHealthCapsule } from "react-icons/gi";
import data from "./questions";
import QuestionCard from "./components/QuestionCard";
import { useContext } from "react";
import { ScoreContext } from "./context/ScoreContext";

function App() {
  const { score } = useContext(ScoreContext);
  return (
    <div style={{ backgroundColor: "#e59866", height: "100vh" }}>
      <h1 style={{ padding: "10px", backgroundColor: "#e5b966" }}>
        Your Health <GiHealthCapsule />
      </h1>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "80%",
          justifyContent: "center",
          marginTop: "60px",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "80%",
            backgroundColor: "#e5b966",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <QuestionCard data={data[0]} />
          <div
            style={{
              position: "absolute",
              top: 2,
              right: 3,
              width: "70px", // Adjust the size as needed
              height: "40px", // Adjust the size as needed
              borderRadius: "6px",
              backgroundColor: "red", // Set the background color
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white", // Set the text color
              fontWeight: "bold",
            }}
          >
            Score: {score}
          </div>
          <button
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              margin: "10px",
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
