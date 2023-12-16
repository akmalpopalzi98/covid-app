import { Children, createContext, useState } from "react";

const QuestionContext = createContext();

const QuestionProvider = ({ children }) => {
  const [index, setIndex] = useState(0);

  const sharedValue = { index, setIndex };

  return (
    <QuestionContext.Provider value={sharedValue}>
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionContext, QuestionProvider };
