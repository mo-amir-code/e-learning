import "./App.css";
import CoursePage from "./Pages/CoursePage";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SyllabusPage from "./Pages/SyllabusPage";
import ContactUsPage from "./Pages/ContactUsPage";
import SocialMedia from "./components/SocialMedia";
import { Fragment } from "react";

function App() {
  return (
    <BrowserRouter>
    <SocialMedia/>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/courses" element={<CoursePage />} />
          <Route exact path="/syllabus" element={<SyllabusPage />} />
          <Route exact path="/contact" element={<ContactUsPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
