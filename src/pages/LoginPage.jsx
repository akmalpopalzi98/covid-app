import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [init, setInit] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    // Add your authentication logic here
    e.preventDefault();
    console.log("Logging in with:", { username });
    navigate("/quiz");
  };

  return (
    <div style={styles.container}>
      <h2>Please enter a name</h2>
      <form style={styles.form} onSubmit={handleLogin}>
        <label>
          Name:
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            style={{ marginLeft: "20px", marginBottom: "20px" }}
          />
        </label>

        <button>Enter</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: "300px",
    margin: "auto",
    marginTop: "100px",
    textAlign: "center",
    position: "relative",
    zIndex: 1,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
  },
};

export default LoginPage;
