import React, { useState } from "react";
import lessonsData from "@/data/lessonsData";
import LessonCard from "./LessonCard";

const tabs = ["HTML", "CSS", "JavaScript"];

const LessonTabs = () => {
  const [activeTab, setActiveTab] = useState("HTML");

  const filteredLessons = lessonsData.filter(
    (lesson) => lesson.language === activeTab
  );

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all
              ${
                activeTab === tab
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-purple-400 hover:bg-gray-200"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Lessons */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredLessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default LessonTabs;
