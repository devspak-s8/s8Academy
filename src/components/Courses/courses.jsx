"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import IncludedItem from "./IncludedItem";
import LessonCard from "./LessonCard";
import {
  FolderIcon,
  DocumentIcon,
  DevicesIcon,
  CertificateIcon,
} from "./CourseIcons";

export default function CourseDescription({ course }) {
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
    </div>
  );
}
