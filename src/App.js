import "./App.css";
import CoursePage from "./Pages/CoursePage";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/courses" element={<CoursePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
