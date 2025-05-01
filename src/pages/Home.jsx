// src/Home.jsx
import React from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import TestimonialsSection from "../components/Testimonials";
import RegistrationForm from "../components/RegistrationForm";
import PopularCoursesSection from "../components/PopularCourses";
import FeatureSection from "../components/FeatureSection";
import VideoSection from "../components/VideoSection";
import FooterSection from "../components/Footer"; // ✅ fixed import

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <PopularCoursesSection />
      <VideoSection />
      <FeatureSection />
      <TestimonialsSection />
      <RegistrationForm />
      <FooterSection />
    </div>
  );
};

export default Home;
