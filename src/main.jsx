import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ScoreProvider } from "./context/ScoreContext.jsx";
import { ModalProvider } from "./context/ModalContext.jsx";
import { QuestionProvider } from "./context/QuestionContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QuestionProvider>
        <ModalProvider>
          <ScoreProvider>
            <App />
          </ScoreProvider>
        </ModalProvider>
      </QuestionProvider>
    </BrowserRouter>
  </React.StrictMode>
);
