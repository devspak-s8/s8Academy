"use client"

import { ChevronRight } from "lucide-react"
import p1 from '../../assets/img/popular-course/p1.jpg';
import p2 from '../../assets/img/popular-course/1000281686.jpg';
import p3 from '../../assets/img/popular-course/p2.jpg';

const InstructorsSection = () => {
  const articles = [
    {
      id: 1,
      title: "Top 10 Tips for Effective Online Learning",
      summary: "Master your virtual classroom experience with these proven strategies for staying focused and motivated.",
      date: "May 10, 2025",
      author: "Sulayman TechPro",
      image: p1, // Replace with your image import or URL
    },
    {
      id: 2,
      title: "How to Build a Strong Coding Foundation",
      summary: "Step-by-step guide to getting started with programming and making your first projects count.",
      date: "April 22, 2025",
      author: "Sulayman TechPro",
      image: p2,
    },
    {
      id: 3,
      title: "The Future of Education: Trends to Watch",
      summary: "Explore the innovations reshaping education and how you can stay ahead in your learning journey.",
      date: "March 15, 2025",
      author: "Sulayman TechPro",
      image: p3,
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
            <span className="text-purple-500">Featured</span> <span className="text-black">Articles</span>
          </h2>

          <div className="flex items-center">
            <div className="bg-white text-black text-sm font-medium py-1 px-3 rounded-full mr-6 hidden md:block">
              12 Articles
            </div>
            <a href="/blog" className="flex items-center text-black group">
              <span className="mr-2">See All</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(({ id, title, summary, date, author, image }) => (
            <article key={id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={image} alt={title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{summary}</p>
                <div className="text-sm text-gray-500 flex justify-between items-center">
                  <span>{date}</span>
                  <span className="font-medium">{author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>


        {/* Mobile instructor count badge */}
        <div className="absolute top-24 right-12 md:hidden bg-black  text-black text-sm font-medium py-1 px-3 rounded-full">
          54 Instructor
        </div>
      </div>
    </section>
  )
}

export default  InstructorsSection ;
; 