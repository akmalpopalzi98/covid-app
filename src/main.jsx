import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ScoreProvider } from "./context/ScoreContext.jsx";
import { ModalProvider } from "./context/ModalContext.jsx";
import { QuestionProvider } from "./context/QuestionContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthenticationProvider } from "./context/Authenticate.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthenticationProvider>
        <QuestionProvider>
          <ModalProvider>
            <ScoreProvider>
              <App />
            </ScoreProvider>
          </ModalProvider>
        </QuestionProvider>
      </AuthenticationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
