import React, { useEffect, useState } from "react";

// Components
import Banner from "../components/LandingPage/Banner";
import IntroWhyChooseUs from "../components/LandingPage/IntroWhyChooseUs";
import FeatureSection from "../components/LandingPage/FeatureSection";
import CourseCatalog from "../components/Courses";
import PopularCourses from "../components/LandingPage/PopularCourses";
import Testimonials from "../components/LandingPage/Testimonials";
import FAQ from "../components/LandingPage/FAQSection";
import CTABanner from "../components/LandingPage/CTAbanner";
import Newslettera from "../components/LandingPage/Newsletter";
import Footer from "../components/LandingPage/Footer";

// 🔥 Skeleton Components
const SkeletonBox = ({ height = "h-4", width = "w-full" }) => (
  <div className={`bg-gray-300 rounded-md ${height} ${width} animate-pulse`} />
);

const SkeletonCard = () => (
  <div className="flex flex-col gap-4 p-4 bg-white rounded-xl shadow-sm animate-pulse">
    <div className="aspect-video bg-gray-200 rounded-xl" />
    <SkeletonBox height="h-5" width="w-3/4" />
    <SkeletonBox height="h-4" width="w-full" />
    <SkeletonBox height="h-4" width="w-5/6" />
  </div>
);

const SkeletonGrid = ({ cards = 3 }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-16">
    {Array(cards).fill(0).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

const SkeletonSection = ({ title = true, cards = 3 }) => (
  <div className="py-10 space-y-6">
    {title && <SkeletonBox height="h-6" width="w-1/3" className="mx-auto" />}
    <SkeletonGrid cards={cards} />
  </div>
);

const SkeletonBanner = () => (
  <div className="h-[300px] md:h-[400px] bg-gray-200 animate-pulse flex items-center justify-center text-gray-400 text-xl font-semibold">
    Loading banner...
  </div>
);

const SkeletonCourseDetails = () => (
  <div className="space-y-10">
    <SkeletonBanner />
    <SkeletonSection title cards={3} />
    <SkeletonSection title cards={3} />
    <SkeletonSection title cards={3} />
    <SkeletonSection title={false} cards={1} />
  </div>
);
const CourseDetails = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Course Details - s3Records";
    const timeout = setTimeout(() => setLoading(false), 1500); // simulate network latency
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {loading ? (
        <SkeletonCourseDetails />
      ) : (
        <>
          <Banner />
          <IntroWhyChooseUs />
          <FeatureSection />
          <CourseCatalog />
          <PopularCourses />
          <Testimonials />
          <FAQ />
          <CTABanner />
          <Newslettera />
          <Footer />
        </>
      )}
    </div>
  );
};

export default CourseDetails;