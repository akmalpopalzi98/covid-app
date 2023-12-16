import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ScoreProvider } from "./context/ScoreContext.jsx";
import { ModalContext, ModalProvider } from "./context/ModalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalProvider>
      <ScoreProvider>
        <App />
      </ScoreProvider>
    </ModalProvider>
  </React.StrictMode>
);
