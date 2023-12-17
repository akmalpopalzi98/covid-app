import "./app.css";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    // Redirect to the login page when the app starts
    navigate("/login");
  }, []);
  return (
    <div style={{ height: "100vh" }}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/quiz" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
