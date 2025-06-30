import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "TREASURE AJEFU",
    role: "Frontend Engineering",
    image: "https://via.placeholder.com/150", // replace with actual image
    testimonial:
      "I was 17 years old when I joined AltSchool Africa. They have the best instructors for live classes and recorded lessons. Since I completed my program, I have been able to get jobs as a software engineer. AltSchool Africa gave me the roadmap and the learning experience that I wouldn’t have gotten at any other place."
  },
  {
    name: "SAMANTHA GLORIA",
    role: "Backend Engineer",
    image: "https://via.placeholder.com/150", // replace with actual image
    testimonial:
      "I think one of the best things that happened to me at AltSchool was learning from people from Nigeria, Kenya [and other African countries]. You get a different perspective on learning and also enjoy a community that helps people grow in so many different ways. AltSchool equipped me with what I needed to get into the door. If I hadn’t been to AltSchool, I’d know nothing."
  }
];

export default function Testimonials() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center py-10 px-4 md:px-10">
      {testimonials.map((item, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row items-center gap-6 w-full max-w-5xl ${
            idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <Avatar className="w-32 h-32">
            <AvatarImage src={item.image} alt={item.name} />
            <AvatarFallback>{item.name[0]}</AvatarFallback>
          </Avatar>

          <Card className="shadow-lg w-full md:w-[80%]">
            <CardContent className="p-6">
              <h3 className="text-lg text-blue-600 font-semibold">{item.role}</h3>
              <p className="text-sm text-gray-900 font-bold mt-1">{item.name}</p>
              <p className="text-gray-700 mt-3 text-base leading-relaxed">
                {item.testimonial}
              </p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
