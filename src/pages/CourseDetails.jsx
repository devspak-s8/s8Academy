// src/Home.jsx
import React from "react";
import Banner from "../components/Banner";
import FooterSection from "../components/Footer"; // ✅ fixed import
import CoursesSection from "../components/Cousredetailing";

import Example2 from "../components/Banner";
const CourseDetails = () => {
  return (
    <div>
      <Example2 />
      <CoursesSection/>
      <FooterSection />
    </div>
  );
};

export default CourseDetails;
