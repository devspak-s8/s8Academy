// src/Home.jsx
import React from "react";
import Banner from "../components/Banner";
import FooterSection from "../components/Footer"; // ✅ fixed import
import CoursesSection from "../components/Cousredetailing";
const CourseDetails = () => {
  return (
    <div>
      <Banner />
      <CoursesSection/>
      <FooterSection />
    </div>
  );
};

export default CourseDetails;
