import React, { useState } from "react";
import { ScoreContext } from "../context/ScoreContext";
import data from "../questions";
import { useContext } from "react";
import LogOut from "../components/LogOut";

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
  submitButton: {
    padding: "10px",
    backgroundColor: "#007BFF", // Adjusted button color
    color: "white",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
  },
};

const Feedback = () => {
  const { score } = useContext(ScoreContext);
  const scorePercent = ((score / data.length) * 100).toFixed(2);

  let feedbackMessage = "";
  let feedbackColor = "";

  // Customize feedback based on the score
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

  const handleScoreSubmission = () => {
    // You can implement the logic for submitting the score here
    console.log("Score submitted:", score);
    // Add additional logic as needed
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
      <button style={styles.submitButton} onClick={handleScoreSubmission}>
        Submit Score
      </button>
    </div>
  );
};

export default Feedback;
