import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import SignUpScreen from "./pages/SignUpScreen";
import LoginScreen from "./pages/LoginScreen";
import ChatScreen from "./pages/ChatScreen";
import MenuScreen from "./pages/MenuScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        {/* <ChatScreen />
        <MenuScreen /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
