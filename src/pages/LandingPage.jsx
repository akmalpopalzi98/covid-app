import React from "react";
import { Link as RouterLink } from "react-router-dom";
import image from "../assets/quiz-image.png";

const LandingPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the COVID Quiz App</h1>
      <p style={styles.description}>
        Explore and enhance your knowledge about COVID-19 to take better care of
        your health and be more considerate of your surroundings.
      </p>
      <p style={styles.appDescription}>
        In the quiz, you'll see a question at the top, followed by four options
        below. Keep an eye on the top right for your score, top left for the
        question number, and bottom right for the button to proceed to the next
        question.
      </p>

      <div style={styles.imageContainer}>
        <img src={image} alt="Quiz App Screenshot" style={styles.image} />
      </div>
      <div style={styles.buttonContainer}>
        <RouterLink to="/quiz" style={styles.beginButton}>
          Begin
        </RouterLink>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  description: {
    fontSize: "16px",
    marginBottom: "30px",
  },
  imageContainer: {
    marginBottom: "20px",
  },
  image: {
    width: "50%", // Set the desired width
    height: "auto", // Maintain aspect ratio
  },
  appDescription: {
    fontSize: "16px",
    marginBottom: "30px",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  beginButton: {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "brown",
    color: "white",
    fontSize: "18px",
    textDecoration: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default LandingPage;
