import React, { useContext, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../context/Authenticate";
import axios from "axios";

const CreateAccountPage = () => {
  const {
    newUsername,
    newPassword,
    setNewPassword,
    setNewUsername,
    name,
    setName,
    accountCreated,
    setAccountCreated,
  } = useContext(AuthenticationContext);

  const [notification, setNotification] = useState("");

  const navigate = useNavigate();

  const data = {
    name: name,
    email: newUsername,
    password: newPassword,
  };

  const createAccount = async () => {
    try {
      const request = await axios.post("http://127.0.0.1:8000/users", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(request);
      setAccountCreated(true);
      setNotification("Account Created Successfully!");
    } catch (error) {
      console.log(error);
      setAccountCreated(false);
      setNotification(
        "Account Creation Failed. Email Is Invalid or Already Exists. Please Try Again."
      );
    }
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    await createAccount();
    setName("");
    setNewUsername("");
    setNewPassword("");
  };
  // Show notification for a few seconds (adjust as needed)
  setTimeout(() => {
    setNotification("");
    setAccountCreated(false);
  }, 9000); // 5000 milliseconds (5 seconds)

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create Account</h2>
      {notification && (
        <div
          style={{
            backgroundColor: accountCreated ? "green" : "red",
            color: "white",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "4px",
          }}
        >
          {notification}
        </div>
      )}
      <form style={styles.form} onSubmit={handleCreateAccount}>
        <label style={styles.label}>
          Please enter your name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Enter a valid email address
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Create Password
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            style={styles.input}
          />
        </label>
        <button style={styles.button}>Create Account</button>
      </form>
      <p style={styles.loginLink}>
        Already have an account?
        <RouterLink to="/login" style={styles.link}>
          {" "}
          Login
        </RouterLink>
      </p>
    </div>
  );
};

const styles = {
  container: {
    margin: "auto",
    marginTop: "50px",
    textAlign: "center",
    position: "relative",
    zIndex: 1,
    backgroundColor: "#eee",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: "300px",
  },
  heading: {
    color: "brown",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
    alignItems: "center",
  },
  label: {
    marginBottom: "10px",
    textAlign: "left",
    width: "100%",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "brown",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  loginLink: {
    marginTop: "20px",
    fontSize: "14px",
  },
  link: {
    color: "brown",
    textDecoration: "underline",
    cursor: "pointer",
  },
};

export default CreateAccountPage;
