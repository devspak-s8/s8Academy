// src/pages/CourseDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import coursesData from "../data/coursesData"; // path to your course data JSON or JS file
import FooterSection from "../components/Footer";
import CoursesSection from "../components/Cousredetailing"; // corrected typo
import CourseBanner from "../components/CourseDetailsBanner";

const CourseDetails = () => {
  const { id } = useParams();

  // Match the course from data file
  const course = coursesData.find((course) => course.id === id);

  // Handle course not found
  if (!course) {
    return (
      <div className="text-center py-20 text-red-600 font-bold text-xl">
        Course Not Found
      </div>
    );
  }

  return (
    <div>
      <CourseBanner course={course} />
      <CoursesSection/>
      <FooterSection />
    </div>
  );
};

export default CourseDetails;

