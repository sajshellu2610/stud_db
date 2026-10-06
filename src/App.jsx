import { Routes, Route } from "react-router-dom";
import Dash from "./Dash";
import Profile from "./Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dash />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;