import { createContext, useState } from "react";

const ScoreContext = createContext();

const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const sharedValue = { score, setScore, isAnswered, setIsAnswered };

  return (
    <ScoreContext.Provider value={sharedValue}>
      {children}
    </ScoreContext.Provider>
  );
};

export { ScoreContext, ScoreProvider };
