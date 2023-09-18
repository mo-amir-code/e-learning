import React from "react";
import Courses from "../components/Courses";
import Teachers from "../components/Teachers";
import StudentReview from "../components/StudentReview";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const CoursePage = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Nav>
          <Courses />
        </Nav>
        <Teachers />
        <StudentReview />
      </div>
      <Footer />
    </div>
  );
};

export default CoursePage;
