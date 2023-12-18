import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const CreateAccountPage = () => {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    // Add your account creation logic here
    e.preventDefault();
    console.log("Creating account with:", { newUsername });
    navigate("/login");
    // You can navigate to a success page or perform other actions as needed
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create Account</h2>
      <form style={styles.form} onSubmit={handleCreateAccount}>
        <label style={styles.label}>
          Please enter a valid email address
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Please enter a secure password for your account
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
