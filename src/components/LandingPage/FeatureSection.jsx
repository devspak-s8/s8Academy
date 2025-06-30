import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import p1 from '../../assets/img/popular-course/p1.jpg';
import p2 from '../../assets/img/popular-course/1000281686.jpg';
import p3 from '../../assets/img/popular-course/p2.jpg';
import p4 from '../../assets/img/popular-course/1000280167.jpg';
import p5 from '../../assets/img/popular-course/1000281629.jpg';
import p6 from '../../assets/img/popular-course/p4.jpg';
const courses = [
  {
    title: "Data Analysis",
    description:
      "Upon completion of the Data Analysis course, you will be equipped with a comprehensive skill set to analyze and present data effectively, transforming raw data into actionable insights.",
    image: p1, // replace with actual image
    tag: "BEGINNER FRIENDLY"
  },
  {
    title: "Product Design",
    description:
      "This course will take you through the basic principles of designing products that address user needs and align with business goals.",
    image: p4, // replace with actual image
    tag: "BEGINNER FRIENDLY"
  },
  {
    title: "Cyber Security",
    description:
      "Become well-equipped to enter the workforce with a solid foundation in both theoretical and practical aspects of cybersecurity, with no degree or prior experience required",
    image: p2, // replace with actual image
    tag: "BEGINNER FRIENDLY"
  }
];

export default function Courses() {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-start py-12 px-4 md:px-10 bg-gradient-to-r from-[#f0faff] to-[#ffffff]">
      {courses.map((item, index) => (
        <Card key={index} className="w-full max-w-sm shadow-xl rounded-2xl overflow-hidden">
          <div className="relative">

            <div className="rounded-2xl overflow-hidden w-full h-48 bg-none p-[10px]">
      
       <img src={item.image} alt={item.title} className="rounded-3xl w-full h-48 object-cover" />
         
      </div>

             <span className="absolute bottom-2 right-2 bg-orange-400 text-white text-xs font-semibold px-3 py-1 rounded">
              {item.tag}
            </span>
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm">{item.description}</p>
            <Button variant="ghost" className="flex items-center gap-2 text-blue-600 font-medium">
              <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm">Learn more</span>
              <span className="text-lg">→</span>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
