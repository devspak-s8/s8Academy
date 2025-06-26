import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const LessonCard = ({ lesson }) => {
  const getBadgeVariant = (status) => {
    switch (status) {
      case "Completed":
        return "success";
      case "In Progress":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <div className="rounded-xl border border-zinc-200 bg-white dark:bg-zinc-950 shadow-md hover:shadow-lg transition-shadow duration-300 p-5 space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-zinc-800 dark:text-white leading-snug">
            {lesson.title}
          </h3>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            {lesson.description}
          </p>
        </div>
        <Badge
          variant={getBadgeVariant(lesson.status)}
          className="capitalize text-xs py-1 px-3"
        >
          {lesson.status}
        </Badge>
      </div>

      <div className="flex justify-between items-center pt-2 border-t border-zinc-100 dark:border-zinc-800">
        <span className="text-xs font-medium text-purple-400">
          ⏱ {lesson.duration} mins
        </span>
        <Button
          size="sm"
          className="bg-indigo-600 text-white hover:bg-indigo-700"
        >
          {lesson.status === "Not Started" ? "Start Lesson" : "Continue"}
        </Button>
      </div>
    </div>
  );
};

export default LessonCard;
