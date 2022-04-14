import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/Index.scss";
import { Routes, Route } from "react-router-dom";
import MeetingRoom from "./pages/MeetingRoom";
import HRDashboard from "./pages/HRDashboard";
import TherapistRoom from "./pages/TherapistRoom";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/class" element={<MeetingRoom />} />
        <Route path="/HRdashboard" element={<HRDashboard />} />
        <Route path="/therapist-dashboard" element={<TherapistRoom />} />
      </Routes>
    </div>
  );
}

export default App;
