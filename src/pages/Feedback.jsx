import React, { useState } from "react";
import { ScoreContext } from "../context/ScoreContext";
import data from "../questions";
import { useContext } from "react";
import LogOut from "../components/LogOut";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

const Feedback = () => {
  const { score } = useContext(ScoreContext);
  const [isLoading, setIsLoading] = useState(false);
  const [submitComplete, setSubmitCompelete] = useState(false);
  const [notification, setNotification] = useState("");
  const [allScores, setAllScores] = useState([]);
  const id = localStorage.getItem("id");

  const scoreData = { score, user_id: Number(id) };
  const scorePercent = ((score / data.length) * 100).toFixed(2);

  let feedbackMessage = "";
  let feedbackColor = "";

  if (scorePercent >= 80) {
    feedbackMessage = "Congratulations! You did great!";
    feedbackColor = "green";
  } else if (scorePercent >= 60) {
    feedbackMessage = "Good job! You're on the right track.";
    feedbackColor = "orange";
  } else {
    feedbackMessage = "Keep practicing. You'll improve!";
    feedbackColor = "red";
  }

  const submitData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/scores",
        scoreData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.statusText === "Created") {
        setNotification("Your Score Has Been Submitted!");
        setSubmitCompelete(true);
        setIsLoading(false);
      } else {
        setNotification("Failed To Submit. Please Try Again.");
      }
    } catch (error) {
      console.error("Error submitting score:", error);
      setNotification("An error occurred. Please try again later.");
      setIsLoading(false);
    }
  };

  const getScores = async () => {
    const scores = await axios.get("http://127.0.0.1:8000/scores/leaderboard");
    setAllScores(scores.data);
  };

  return (
    <div style={styles.feedbackContainer}>
      <LogOut />
      <h1>Your Quiz Result</h1>
      <div style={{ ...styles.scoreContainer, borderColor: feedbackColor }}>
        <p style={styles.scoreText}>Score: {scorePercent}%</p>
      </div>
      <p style={{ ...styles.feedbackText, color: feedbackColor }}>
        {feedbackMessage}
      </p>
      <div style={styles.buttonContainer}>
        <button
          style={styles.submitButton}
          onClick={submitData}
          disabled={submitComplete}
        >
          {isLoading ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            "Submit Score"
          )}
        </button>
        <button style={styles.leaderboardsButton} onClick={getScores}>
          Leaderboards
        </button>
      </div>
      {notification && <div style={styles.notification}>{notification}</div>}
    </div>
  );
};

export default Feedback;

const styles = {
  feedbackContainer: {
    textAlign: "center",
    margin: "50px",
    border: "2px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
  },
  scoreContainer: {
    border: "2px solid",
    borderRadius: "10px",
    padding: "10px",
    marginTop: "20px",
    width: "200px",
    display: "inline-block",
  },
  scoreText: {
    fontSize: "24px",
    margin: "0",
  },
  feedbackText: {
    fontSize: "18px",
    marginTop: "20px",
    color: "#333",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  submitButton: {
    padding: "10px",
    backgroundColor: "#229954",
    color: "white",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  leaderboardsButton: {
    padding: "10px",
    backgroundColor: " #7f8c8d",
    color: "white",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  notification: {
    marginTop: "10px",
    color: "#333",
  },
};
