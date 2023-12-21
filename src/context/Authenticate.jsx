import { createContext, useState } from "react";

const AuthenticationContext = createContext();

const AuthenticationProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const sharedValue = {
    username,
    setUsername,
    password,
    setPassword,
    loggedIn,
    setLoggedIn,
  };

  return (
    <AuthenticationContext.Provider value={sharedValue}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationContext, AuthenticationProvider };
