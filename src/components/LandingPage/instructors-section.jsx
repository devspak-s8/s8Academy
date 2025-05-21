"use client"

import { ChevronRight } from "lucide-react"
import i1 from "../../assets/img/i1.jpg";
import i2 from "../../assets/img/i2.jpg";
import i3 from "../../assets/img/i3.jpg";
import i4 from "../../assets/img/i4.jpg";


export default function InstructorsSection() {
 const instructors = [
  {
    id: 1,
    name: "Jon Kantner",
    role: "Designer",
    image: i1,
  },
  {
    id: 2,
    name: "Debbie LaChusa",
    role: "SEO",
    image: i2,
  },
  {
    id: 3,
    name: "Edwin Diaz",
    role: "Composer",
    image: i3,
  },
  {
    id: 4,
    name: "Cassie Evans",
    role: "Photographer",
    image: i4,
  },
  {
    id: 5,
    name: "Erich Andreas",
    role: "Programmer",
    image: i1, // reuse or add new images as needed
  },
  {
    id: 6,
    name: "Jason Allen",
    role: "Accounting",
    image: i2,
  },
];

  return (
    <section className="relative py-32 px-10 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,500 C200,300 300,200 500,200 C700,200 800,300 1000,500 C800,700 700,800 500,800 C300,800 200,700 0,500 Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
            opacity="0.3"
          />
          <path
            d="M0,600 C200,400 300,300 500,300 C700,300 800,400 1000,600 C800,800 700,900 500,900 C300,900 200,800 0,600 Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
            opacity="0.3"
          />
          <path
            d="M0,400 C200,200 300,100 500,100 C700,100 800,200 1000,400 C800,600 700,700 500,700 C300,700 200,600 0,400 Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-purple-500">Best</span> <span className="text-black ">Instructors</span>
          </h2>

          <div className="flex items-center">
            <div className="bg-white text-black text-sm font-medium py-1 px-3 rounded-full mr-6 hidden md:block">
              54 Instructor
            </div>
            <a href="#" className="flex items-center text-white group">
              <span className="mr-2">All Instructors</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={`/placeholder.svg?height=300&width=400`}
                  alt={instructor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex justify-between items-center">
                <h3 className="font-medium text-lg">{instructor.name}</h3>
                <span className="text-gray-600 text-sm">{instructor.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile instructor count badge */}
        <div className="absolute top-24 right-12 md:hidden bg-white text-black text-sm font-medium py-1 px-3 rounded-full">
          54 Instructor
        </div>
      </div>
    </section>
  )
}
