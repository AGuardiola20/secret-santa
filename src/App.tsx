import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./screens/SplashScreen";
import CodeScreen from "./screens/CodeScreen";
import NewCodeScreen from "./screens/NewCodeScreen";
import UserScreen from "./screens/UserScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/code" element={<CodeScreen />} />
        <Route path="/newCode" element={<NewCodeScreen />} />
        <Route path="/user" element={<UserScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
