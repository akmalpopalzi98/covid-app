import { createContext, useState } from "react";

const AuthenticationContext = createContext();

const AuthenticationProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);

  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [name, setName] = useState("");

  const sharedValue = {
    username,
    setUsername,
    password,
    setPassword,
    loggedIn,
    setLoggedIn,
    newUsername,
    setNewUsername,
    newPassword,
    setNewPassword,
    name,
    setName,
    accountCreated,
    setAccountCreated,
  };

  return (
    <AuthenticationContext.Provider value={sharedValue}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationContext, AuthenticationProvider };
