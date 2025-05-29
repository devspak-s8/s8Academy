"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import { GraduationCap, FileText, Settings, ExternalLink, Tablet, Globe } from "lucide-react"

import { Check, CreditCard, Plus } from "lucide-react"
import IncludedItem from "./IncludedItem";
import LessonCard from "./LessonCard";
import {
  FolderIcon,
  DocumentIcon,
  DevicesIcon,
  CertificateIcon,
} from "./CourseIcons";

export default function CourseDescription({ course }) {
   const [isPaymentPlansOpen, setIsPaymentPlansOpen] = useState(false)

  const benefits = [
    "Lead AI innovation by mastering core AI & ML concepts & technologies",
    "Build AI applications with GenAI, NLP, computer vision, predictive analytics, and recommendation systems",
    "Build an impressive, industry-ready portfolio with hands-on projects",
    "Earn a bonus certificate in Python Foundations to strengthen your skills",
  ]

    const highlights = [
    {
      icon: <GraduationCap className="w-8 h-8 text-gray-600" />,
      title: "Learn from world's top university",
      description: "Earn a certificate from a world-renowned university, taught by top Faculty",
    },
    {
      icon: <FileText className="w-8 h-8 text-gray-600" />,
      title: "Industry-ready curriculum",
      description:
        "Learn the foundations of Python, GenAI, and Deep Learning, gain valuable insights, and apply your skills to transition into AI roles",
    },
    {
      icon: <Settings className="w-8 h-8 text-gray-600" />,
      title: "Learn at your convenience",
      description:
        "Gain access to 200+ hours of content online, including lectures, assignments, and live webinars which you can access anytime, anywhere",
    },
    {
      icon: <ExternalLink className="w-8 h-8 text-gray-600" />,
      title: "8+ hands-on projects & 10+ tools",
      description:
        "Build projects made using data from top companies like Uber, Netflix, and Amazon and get hands-on training with projects and case studies",
    },
    {
      icon: <Tablet className="w-8 h-8 text-gray-600" />,
      title: "Get expert mentorship",
      description:
        "Interact with mentors who are experts in AI and get guidance to complete and showcase your projects",
    },
    {
      icon: <Globe className="w-8 h-8 text-gray-600" />,
      title: "Personalized program support",
      description: "Get 1:1 personal assistance from a Program Manager to complete your course with ease.",
    },
  ]

  const skills = [
    "PROGRAMMING FUNDAMENTALS",
    "MACHINE LEARNING",
    "COMPUTER VISION",
    "GENERATIVE AI",
    "FOUNDATIONAL SKILLS CERTIFICATION",
    "PROBLEM-SOLVING SKILLS",
    "PORTFOLIO DEVELOPMENT",
  ]

const [expandedChapters, setExpandedChapters] = useState({}); // track expanded state per chapter
  const [expandAll, setExpandAll] = useState(false);

  // Toggle individual chapter open/close
  const toggleChapter = (id) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Toggle expand all chapters
  const toggleExpandAll = () => {
    if (expandAll) {
      setExpandedChapters({});
      setExpandAll(false);
    } else {
      const allExpanded = {};
      course.chapters.forEach((chapter) => {
        allExpanded[chapter.id] = true;
      });
      setExpandedChapters(allExpanded);
      setExpandAll(true);
    }
  };
  return (
    <div className="max-w-6xl mx-auto p-12">

       {/* Header */}
      <div className="mb-8">
        <p className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-2">KEY PROGRAM HIGHLIGHTS</p>
        <h2 className="text-3xl font-bold text-gray-900">Why choose the <span> {course.title}</span> program</h2>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex flex-col space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">{highlight.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills you will learn</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-md border border-blue-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div> 
      {/* Included Items */}
      <h2 className="text-2xl font-bold mb-6">What's included</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {course.includedItems.map(({ icon, title }, idx) => (
          <IncludedItem key={idx} icon={icon} title={title} />
        ))}
      </div>
         
      {/* Course Description */}
      <h2 className="text-2xl font-bold mb-4">Course description</h2>
      <p className="text-gray-700 mb-2">
        {course.expandedDescription}
        <button className="text-blue-600 font-medium ml-1">Read more</button>
      </p>

      {/* Chapters Header */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Courses In This Program</h2>
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600 text-sm">
          {course.totalChapters} Chapters • {course.totalLectures} lectures • {course.totalLength} total length
        </p>
        <button
          className="flex items-center text-blue-600 font-medium"
          onClick={toggleExpandAll}
        >
          {expandAll ? "Collapse all chapters" : "Expand all chapters"}{" "}
          <ChevronRight className="h-5 w-5 ml-1" />
        </button>
      </div>

      {/* Chapters List */}
      {course.chapters.map((chapter) => {
        const isExpanded = !!expandedChapters[chapter.id];
        return (
          <div key={chapter.id} className="border rounded-lg overflow-hidden mb-6">
            <div
              className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
              onClick={() => toggleChapter(chapter.id)}
            >
              <div>
                <span className="text-sm font-medium text-indigo-700">
                  {chapter.title} • {chapter.duration}
                </span>
                <h3 className="font-medium">{chapter.subtitle || chapter.title}</h3>
              </div>
              {isExpanded ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </div>

            {isExpanded && (
              <div className="p-4 bg-white grid grid-cols-1 md:grid-cols-3 gap-6">
                {chapter.lessons.map((lesson) => (
                  <LessonCard
                    key={lesson.id}
                    number={lesson.number}
                    title={lesson.title}
                    description={lesson.description}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}
  {/* Course Fees Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Course fees</h2>
        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">The AI & ML course fee is 3,500 USD</h3>
          <p className="text-xl font-semibold text-gray-700 mb-6">Invest in your career</p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Easy Payment Plans */}
        <div className="mb-8">
          <button
            onClick={() => setIsPaymentPlansOpen(!isPaymentPlansOpen)}
            className="flex items-center justify-between w-full max-w-md mx-auto p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900">Easy Payment Plans</h4>
                <p className="text-sm text-gray-600">Avail our flexible payment options & get financial assistance</p>
              </div>
            </div>
            <Plus className={`w-5 h-5 text-gray-400 transition-transform ${isPaymentPlansOpen ? "rotate-45" : ""}`} />
          </button>

          {isPaymentPlansOpen && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg max-w-md mx-auto">
              <p className="text-gray-700 text-sm">
                We offer flexible payment plans including installment options and financial assistance programs. Contact
                our advisors to learn more about available options.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Take the Next Step */}
      <div className="bg-indigo-600 rounded-lg p-8 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-16 h-16 border border-yellow-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-4 right-8 w-8 h-8 bg-yellow-400 rounded-full opacity-30"></div>
        <div className="absolute top-8 right-12 w-4 h-4 bg-yellow-400 rounded-full opacity-40"></div>

        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-2">Take the next step</h3>
          <p className="text-indigo-100 mb-8">Apply to the program now or schedule a call with a program advisor</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Apply Now Card */}
            <div className="bg-white rounded-lg p-6 text-gray-900">
              <h4 className="font-semibold mb-2">Unlock exclusive course sneak peek</h4>
              <p className="text-sm text-red-500 mb-4">Application Closes: 29th May 2025</p>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>

            {/* Schedule Call Card */}
            <div className="bg-white rounded-lg p-6 text-gray-900">
              <h4 className="font-semibold mb-2">Talk to our advisor for offers & course details</h4>
              <div className="mb-4 h-6"></div> {/* Spacer to match height */}
              <button className="w-full border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Schedule A Call
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
