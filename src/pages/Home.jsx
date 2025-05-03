// src/CourseDetails.jsx
import React from "react";

// 🔻 Section Components
import Banner from "../components/Banner";
// 🔻 Optional UI Enhancements (can remove if not needed)
import Features from "../components/Features";
import VideoSection from "../components/VideoSection";
import PopularCourses from "../components/PopularCourses";
import FeatureSection from "../components/FeatureSection";
import RegistrationSection from "../components/RegistrationForm";
// 🔻 Footer
import Footer from "../components/Footer";

const CourseDetails = () => {
  return (
    <div>
      {/* Top Banner */}
      <Banner />

      <Features />
      <PopularCourses />

     


      {/* Supplementary Content */}
      <VideoSection />
      <FeatureSection/>
      <RegistrationSection/>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CourseDetails;
