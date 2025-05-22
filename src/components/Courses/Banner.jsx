import React from "react";
import { Star, ChevronRight, Search } from "lucide-react"; // if you're using it like this
import { Badge } from "@/components/ui/badge"; // adjust import if needed
import { Button } from "@/components/ui/button"; // adjust import if needed

function CourseBanner({ course }) {
  if (!course) {
    return (
      <div className="text-center mt-20 text-red-500">
        Course Not Found, sir.
      </div>
    );
  }

  return (
   <div className="pt-4 bg-indigo-950 text-white min-h-0">
   {/* Navigation */}
      <nav className=" backdrop-blur-sm py-4 ">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between flex-wrap gap-y-4">
          <span className="text-gray-300 hover:text-white cursor-pointer">
            All courses
          </span>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-300" />
          <span className="text-gray-300 hover:text-white cursor-pointer">
            Web Design
          </span>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-300" />
          <span className="text-gray-300">Product Design</span>

          {/* Search bar */}
          <div className="ml-auto relative">
            <input
              type="text"
              className="bg-white/10 border border-white/20 rounded-full py-1 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="Search..."
            />
            <Search className="h-4 w-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
          </div>
        </div>
      </nav>

      <main className="px-6 py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-extrabold text-white mb-2">
                {course.title}
              </h1>
              <p className="text-base text-indigo-200">{course.subtitle}</p>
            </div>

            {/* Ratings */}
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) =>
                  i < course.rating ? (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ) : (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      strokeWidth={1.5}
                      fill="none"
                    />
                  )
                )}
              </div>
              <span className="text-sm text-gray-400">({course.reviews})</span>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed">
              {course.description}
              <button className="ml-2 text-indigo-400 hover:underline">
                Read more
              </button>
            </p>

            {/* Skills */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {course.techStack.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="rounded-full bg-indigo-900/50 text-white border-indigo-700 hover:bg-indigo-800 transition"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {course.extendedSkills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="rounded-full bg-indigo-900/50 text-white border-indigo-700 hover:bg-indigo-800 transition"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="rounded-full bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 font-semibold transition">
                Start Learning
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-indigo-400 text-indigo-300 hover:bg-indigo-800 px-6 py-2 transition"
              >
                Add to Cart – {course.price}
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center items-center">
            {/* You can slot in a thumbnail, video preview, or course card here */}
            <div className="w-full aspect-video bg-indigo-900/40 border border-indigo-700 rounded-xl flex items-center justify-center text-indigo-300">
              <span className="text-sm">Course Preview Placeholder</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CourseBanner;
