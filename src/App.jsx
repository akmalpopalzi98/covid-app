import "./app.css";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Feedback from "./pages/Feedback";
import LandingPage from "./pages/LandingPage";
import CreateAccountPage from "./pages/CreateAccountPage";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    if (!storedToken) navigate("/login");
    console.log(storedToken);
  }, []);
  return (
    <div style={{ height: "100vh" }}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/welcome" element={<LandingPage />} />
        <Route path="/quiz" element={<MainPage />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
      </Routes>
    </div>
  );
}

export default App;
