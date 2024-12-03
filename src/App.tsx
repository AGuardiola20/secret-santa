import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./screens/SplashScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
