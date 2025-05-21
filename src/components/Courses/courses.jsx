"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react"
import IncludedItem from "./IncludedItem"
import LessonCard from "./LessonCard"
import { FolderIcon, DocumentIcon, DevicesIcon, CertificateIcon } from "./CourseIcons"

export default function CourseDescription({ course }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">What's included</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <IncludedItem icon={<FolderIcon />} title="One project file" />
        <IncludedItem icon={<DocumentIcon />} title="3 chapter quizzes" />
        <IncludedItem icon={<DevicesIcon />} title="Access on tablet and phone" />
        <IncludedItem icon={<CertificateIcon />} title="Certificate of completion" />
      </div>

      <h2 className="text-2xl font-bold mb-4">Course description</h2>
      <p className="text-gray-700 mb-2">
         {course.description}
        <button className="text-blue-600 font-medium ml-1">Read more</button>

      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Courses In This Program</h2>
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600 text-sm">16 Chapters • 323 lectures • 19h 12m total length</p>
        <button className="flex items-center text-blue-600 font-medium" onClick={() => setExpanded(!expanded)}>
          Expand all chapters <ChevronRight className="h-5 w-5 ml-1" />
        </button>
      </div>

      <div className="border rounded-lg overflow-hidden mb-6">
        <div
          className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          <div>
            <span className="text-sm font-medium text-indigo-700">Chapter 1 • 45 minutes</span>
            <h3 className="font-medium">Welcome to the User Experience Product Design Program</h3>
          </div>
          {expanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </div>

        {expanded && (
          <div className="p-4 bg-white grid grid-cols-1 md:grid-cols-3 gap-6">
            <LessonCard
              number={1}
              title="User Experience Product Design Program Introduction"
              description="Intro to user experience design..."
            />
            <LessonCard
              number={2}
              title="Introduction to User Experience Design"
              description="Fundamentals of UX design..."
            />
            <LessonCard
              number={3}
              title="Get Help with Your Account"
              description="Help and support info."
            />
          </div>
        )}
      </div>
    </div>
  )
}
