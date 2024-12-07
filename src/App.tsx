import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./screens/SplashScreen";
import CodeScreen from "./screens/CodeScreen";
import NewCodeScreen from "./screens/NewCodeScreen";
import UserScreen from "./screens/UserScreen";
import RoomScreen from "./screens/RoomScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/code" element={<CodeScreen />} />
        <Route path="/newCode" element={<NewCodeScreen />} />
        <Route path="/user" element={<UserScreen />} />
        <Route path="/room" element={<RoomScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
