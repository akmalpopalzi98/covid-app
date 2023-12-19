import { useNavigate, Link as RouterLink } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    // Add your authentication logic here
    e.preventDefault();
    console.log("Logging in with:", { username });
    navigate("/quiz");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <form style={styles.form} onSubmit={handleLogin}>
        <label style={styles.label}>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </label>
        <button style={styles.button}>Login</button>
      </form>

      {/* Link to CreateAccountPage */}
      <p style={styles.createAccount}>
        Don't have an account?{" "}
        <RouterLink to="/create-account" style={styles.link}>
          Create an account
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
  createAccount: {
    marginTop: "20px",
    fontSize: "14px",
  },
  link: {
    color: "blue",
    textDecoration: "underline",
    cursor: "pointer",
  },
};

export default LoginPage;
