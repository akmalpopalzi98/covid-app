import "./app.css";
import { GiHealthCapsule } from "react-icons/gi";
import data from "./questions";
import QuestionCard from "./components/QuestionCard";
function App() {
  return (
    <div style={{ backgroundColor: " #e59866 ", height: "100vh" }}>
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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <QuestionCard data={data[0]} />
        </div>
      </div>
    </div>
  );
}

export default App;
