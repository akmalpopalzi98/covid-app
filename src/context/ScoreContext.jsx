import { Children, createContext, useState } from "react";

const ScoreContext = createContext(0);

const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const sharedValue = { score, setScore };

  return (
    <ScoreContext.Provider value={sharedValue}>
      {children}
    </ScoreContext.Provider>
  );
};

export { ScoreContext, ScoreProvider };
