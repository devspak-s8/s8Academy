import React from "react";

const IntroWhyChooseUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
      {/* Text Content */}
      <div className="lg:w-1/2">
        <h2 className="text-4xl font-extrabold mb-6">
          Why Choose <span className="text-purple-600">S8Academy</span>?
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          At S8Academy, we empower learners with cutting-edge courses designed by industry leaders.
          Learn at your own pace, work on real projects, and get personalized mentorship for career success.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Expert instructors with real-world experience</li>
          <li>Hands-on projects to build your portfolio</li>
          <li>Flexible learning schedule tailored to you</li>
          <li>Community support and mentorship</li>
        </ul>
      </div>

      {/* Inline SVG Illustration */}
      <div className="lg:w-1/2 flex justify-center">
        <svg
          width="320"
          height="320"
          viewBox="0 0 320 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-full h-auto"
        >
          {/* Book base */}
          <rect x="40" y="100" width="240" height="140" rx="12" fill="#7C3AED" />
          {/* Book pages */}
          <path
            d="M40 100 L160 70 L280 100 L280 240 L160 210 L40 240 Z"
            fill="#D8B4FE"
            stroke="#5B21B6"
            strokeWidth="4"
          />
          {/* Bookmark */}
          <polygon points="150,70 160,90 170,70" fill="#A78BFA" />
          {/* Light bulb */}
          <circle cx="160" cy="40" r="28" fill="#FBBF24" />
          <rect x="145" y="62" width="30" height="10" rx="5" fill="#F59E0B" />
          <line x1="160" y1="68" x2="160" y2="90" stroke="#FBBF24" strokeWidth="3" />
          {/* Rays around bulb */}
          <line x1="160" y1="10" x2="160" y2="0" stroke="#FBBF24" strokeWidth="2" />
          <line x1="190" y1="30" x2="198" y2="24" stroke="#FBBF24" strokeWidth="2" />
          <line x1="130" y1="30" x2="122" y2="24" stroke="#FBBF24" strokeWidth="2" />
          <line x1="190" y1="50" x2="198" y2="56" stroke="#FBBF24" strokeWidth="2" />
          <line x1="130" y1="50" x2="122" y2="56" stroke="#FBBF24" strokeWidth="2" />
          {/* Base shadow */}
          <ellipse cx="160" cy="250" rx="90" ry="20" fill="#6B21A8" opacity="0.2" />
        </svg>
      </div>
    </section>
  );
};

export default IntroWhyChooseUs;
