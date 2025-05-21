import React from 'react';
import { Star, ChevronRight, Search } from 'lucide-react'; // if you're using it like this
import { Badge } from '@/components/ui/badge'; // adjust import if needed
import { Button } from '@/components/ui/button'; // adjust import if needed

function CourseBanner({ course }) {
  if (!course) {
    return <div className="text-center mt-20 text-red-500">Course Not Found, sir.</div>;
  }

  return (
    <div className="min-h-screen pt-4 bg-indigo-950 text-white">
      {/* Navigation */}
      <nav className=" backdrop-blur-sm py-4 ">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between flex-wrap gap-y-4">
          <span className="text-gray-300 hover:text-white cursor-pointer">All courses</span>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-300" />
          <span className="text-gray-300 hover:text-white cursor-pointer">Web Design</span>
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


      <main className="px-6 py-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-sm text-indigo-200 mb-4">{course.subtitle}</p>

            {/* Ratings */}
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) =>
                  i < course.rating ? (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ) : (
                    <Star key={i} className="h-5 w-5 fill-transparent text-yellow-400" strokeWidth={1.5} />
                  )
                )}
              </div>
              <span className="ml-2 text-sm text-gray-300">({course.reviews})</span>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-6">
              {course.description}
              <button className="text-indigo-300 hover:text-indigo-200 ml-1">Read more</button>
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {course.techStack.map((skill, idx) => (
                <Badge key={idx} variant="outline" className="rounded-full bg-indigo-900/50 text-white border-indigo-700 hover:bg-indigo-800">
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {course.extendedSkills.map((skill, idx) => (
                <Badge key={idx} variant="outline" className="rounded-full bg-indigo-900/50 text-white border-indigo-700 hover:bg-indigo-800">
                  {skill}
                </Badge>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button className="rounded-full bg-white text-indigo-950 hover:bg-gray-200">
                Start Learning
              </Button>
              <Button variant="outline" className="rounded-full border-white text-white hover:bg-indigo-900">
                Add to Cart – {course.price}
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 flex items-center justify-center">

          </div>
        </div>
      </main>
    </div>
  );
}

export default CourseBanner;


// function CourseIllustration() {
//   return (
//    <div className="relative w-full max-w-md">
//   {/* React Card */}
//   <div className="absolute top-20 left-40 bg-blue-600 rounded-lg p-4 w-40 h-32 shadow-lg z-20 flex items-center justify-center">
//     <div className="text-center">
//       <span className="text-2xl font-bold text-white">React.js</span>
//     </div>
//   </div>

//   {/* JavaScript Card */}
//   <div className="absolute top-0 left-0 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-lg p-3 w-36 h-28 shadow-lg z-10">
//     <div className="text-black font-bold text-lg text-center">JS</div>
//     <div className="flex justify-center space-x-2 mt-4">
//       <div className="w-6 h-6 bg-black/20 rounded-full"></div>
//       <div className="w-6 h-6 bg-black/20 rounded-full"></div>
//       <div className="w-6 h-6 bg-black/20 rounded-full"></div>
//     </div>
//   </div>

//   {/* Next.js Profile Card */}
//   <div className="absolute top-10 right-0 bg-gradient-to-br from-gray-800 to-black rounded-lg p-3 w-36 h-40 shadow-lg z-30">
//     <div className="flex justify-center mb-2">
//       <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white text-sm">Next</div>
//     </div>
//     <div className="space-y-2">
//       <div className="w-full h-2 bg-white/10 rounded-full"></div>
//       <div className="w-full h-2 bg-white/10 rounded-full"></div>
//       <div className="w-3/4 h-2 bg-white/10 rounded-full"></div>
//     </div>
//     <div className="mt-4 space-y-2">
//       {Array(3).fill(0).map((_, i) => (
//         <div className="flex items-center" key={i}>
//           <div className="w-4 h-4 bg-white/10 rounded-full mr-2"></div>
//           <div className="w-full h-2 bg-white/10 rounded-full"></div>
//         </div>
//       ))}
//     </div>
//   </div>

//   {/* Tailwind Logo Card */}
//   <div className="absolute bottom-0 right-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg p-2 w-12 h-12 shadow-lg z-10 flex items-center justify-center">
//     <div className="text-white text-xs font-bold">TW</div>
//   </div>

//   {/* TypeScript Card */}
//   <div className="absolute bottom-20 left-20 bg-gradient-to-br from-blue-800 to-blue-400 rounded-lg p-2 w-12 h-12 shadow-lg z-10 flex items-center justify-center">
//     <div className="text-white text-xs font-bold">TS</div>
//   </div>

//   {/* Connection Lines */}
//   <svg
//     className="absolute inset-0 w-full h-full"
//     viewBox="0 0 400 400"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path d="M100 100 L200 150 L300 120" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
//     <path d="M200 150 L250 250 L150 300" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
//   </svg>
// </div>

//   )
// }
