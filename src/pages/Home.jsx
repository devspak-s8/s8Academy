// src/CourseDetails.jsx
import React from "react";

// Core components
import Banner from "../components/LandingPage/Banner";
import IntroWhyChooseUs from "../components/LandingPage/IntroWhyChooseUs";  
import FeatureSection from "../components/LandingPage/FeatureSection";
import PopularCourses from "../components/LandingPage/PopularCourses";
import Testimonials from "../components/LandingPage/Testimonials";
import FAQ from "../components/LandingPage/FAQSection";
import CTABanner from "../components/LandingPage/CTAbanner";
import Newslettera from "../components/LandingPage/Newsletter";
import Footer from "../components/LandingPage/Footer";
import CourseCatalog from "../components/Courses";
// Optional UI - remove if unused

const CourseDetails = () => {
  return (
    <div>
      {/* Hero Section */}
      <Banner />

      {/* <- Add it here */}
      <IntroWhyChooseUs /> 

      {/* Core Features */}
      <FeatureSection />

      <CourseCatalog />
      {/* Courses */}
      <PopularCourses />


      {/* Social Proof */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Call To Action */}
      <CTABanner />

      {/* Newsletter Signup */}
      <Newslettera />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CourseDetails;
