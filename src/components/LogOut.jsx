import React, { useContext, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { AuthenticationContext } from "../context/Authenticate";
import { useNavigate } from "react-router-dom";
import { QuestionContext } from "../context/QuestionContext";
import { ScoreContext } from "../context/ScoreContext";

const LogOut = () => {
  const navigate = useNavigate();
  const { setLoggedIn } = useContext(AuthenticationContext);
  const { setIndex } = useContext(QuestionContext);
  const { setScore } = useContext(ScoreContext);
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);

  const handleLogout = () => {
    setConfirmationOpen(true);
  };

  const confirmLogout = () => {
    setLoggedIn(false);
    navigate("/login");
    localStorage.removeItem("access_token");
    localStorage.removeItem("id");
    setIndex(0);
    setScore(0);
    setConfirmationOpen(false);
  };

  const cancelLogout = () => {
    setConfirmationOpen(false);
  };

  return (
    <>
      <button style={styles.button} onClick={handleLogout}>
        <FaSignOutAlt />
      </button>

      {isConfirmationOpen && (
        <>
          <div style={styles.overlay}></div>
          <div style={styles.modal}>
            <p>Are you sure you want to log out? Your progress will be lost.</p>
            <button style={styles.confirmationButton} onClick={confirmLogout}>
              Yes
            </button>
            <button style={styles.confirmationButton} onClick={cancelLogout}>
              No
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default LogOut;

const styles = {
  button: {
    position: "absolute",
    top: 10,
    right: 10,
    width: "fit-content",
    padding: "10px",
    borderRadius: "6px",
    backgroundColor: "#e74c3c", // Adjust the background color
    color: "white", // Adjust the text color
    fontWeight: "bold",
    cursor: "pointer",
    zIndex: 4,
    display: "flex",
    alignItems: "center",
  },
  modal: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "20px",
    zIndex: 5,
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 4,
  },
  confirmationButton: {
    margin: "10px",
    cursor: "pointer",
    padding: "10px 20px",
    borderRadius: "6px",
    backgroundColor: "#3498db", // Adjust the background color
    color: "white", // Adjust the text color
    fontSize: "16px",
    border: "none",
  },
  cancelButton: {
    cursor: "pointer",
    padding: "10px 20px",
    borderRadius: "6px",
    backgroundColor: "#95a5a6", // Adjust the background color
    color: "white", // Adjust the text color
    fontSize: "16px",
    border: "none",
  },
};
