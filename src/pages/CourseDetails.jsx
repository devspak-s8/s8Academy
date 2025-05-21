// src/pages/CourseDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import coursesData from "../data/coursesData"; // path to your course data JSON or JS file
import FooterSection from "../components/LandingPage/Footer";
import CoursesSection from "../components/Courses/Cousredetailing"; // corrected typo
import CourseBanner from "../components/Courses/Banner";
import CourseDetails2 from "@/components/Courses/courses";
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
      <CourseDetails2/>
      <FooterSection />
    </div>
  );
};

export default CourseDetails;

