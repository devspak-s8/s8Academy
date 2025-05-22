// src/CourseDetails.jsx
import React from "react";

// 🔻 Section Components
import Banner from "../components/LandingPage/Banner";
// 🔻 Optional UI Enhancements (can remove if not needed)
import Features from "../components/Features";
import VideoSection from "../components/LandingPage/VideoSection";
import PopularCourses from "../components/LandingPage/PopularCourses";
import FeatureSection from "../components/LandingPage/FeatureSection";
import RegistrationSection from "../components/LandingPage/RegistrationForm";
import InstructorsSection from "../components/LandingPage/instructors-section";
// 🔻 Footer
import Newsletter from "../components/LandingPage/newsletter";
import Footer from "../components/LandingPage/Footer";
import FAQ from "@/components/LandingPage/FAQSection";
const CourseDetails = () => {
  return (
    <div>
      {/* Top Banner */}
      <Banner />

      <Features />
      <PopularCourses />
      <InstructorsSection />
     

      <FeatureSection/>
      <RegistrationSection/>
      <FAQ/>
      {/* Footer */}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default CourseDetails;
