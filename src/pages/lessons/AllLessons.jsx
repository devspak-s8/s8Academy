import React from "react";
import LessonTabs from "./LessonTabs";

const AllLessons = () => {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold text-indigo-600">All Lessons</h1>
      <LessonTabs />
    </div>
  );
};

export default AllLessons;
