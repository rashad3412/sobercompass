import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import SignUpScreen from "./pages/SignUpScreen";
import LoginScreen from "./pages/LoginScreen";
import HomeScreen from "./pages/HomeScreen";
import ChatScreen from "./pages/ChatScreen";
import CurrentStreak from "./components/CurrentStreak";
import RecoveryRes from "./components/RecoveryRes";
import DailyCheckIn from "./components/DailyCheckIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/homescreen" element={<HomeScreen />} />
        <Route path="/chatscreen" element={<ChatScreen />} />
        <Route path="/currentstreak" element={<CurrentStreak />} />
        <Route path="/recoveryresources" element={<RecoveryRes />} />
        <Route path="/dailycheckin" element={<DailyCheckIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
