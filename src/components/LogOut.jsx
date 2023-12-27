import React, { useContext } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { AuthenticationContext } from "../context/Authenticate";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
  const { setLoggedIn } = useContext(AuthenticationContext);
  const styles = {
    button: {
      position: "absolute",
      top: 0,
      right: 3,
      width: "5%",
      height: "5%",
      borderRadius: "6px",
      backgroundColor: "#e74c3c", // Adjust the background color
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white", // Adjust the text color
      fontWeight: "bold",
      cursor: "pointer",
      zIndex: 4,
    },
  };

  return (
    <button
      style={styles.button}
      onClick={() => {
        setLoggedIn(false);
        navigate("/login");

        localStorage.removeItem("access_token");
        localStorage.removeItem("id");
      }}
    >
      Log Out
      <FaSignOutAlt />
    </button>
  );
};

export default LogOut;
