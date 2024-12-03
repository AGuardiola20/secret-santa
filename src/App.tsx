import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./screens/SplashScreen";
import CodeScreen from "./screens/CodeScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/code" element={<CodeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
