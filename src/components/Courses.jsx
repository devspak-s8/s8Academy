import CourseCard from "@/components/course-card"
import CategoryMenuItem from "@/components/category-menu-item"
import { BarChart2, Database, Shield, Monitor, Plus } from "lucide-react"

const CourseCatalog = () => {
  const categoryItems = [
    { icon: <BarChart2 className="w-5 h-5" />, label: "Popular Courses", active: true },
    { icon: <Database className="w-5 h-5" />, label: "AI & Machine Learning" },
    { icon: <BarChart2 className="w-5 h-5" />, label: "Data Science & Analytics" },
    { icon: <Shield className="w-5 h-5" />, label: "Cyber Security" },
    { icon: <Monitor className="w-5 h-5" />, label: "Software Development" },
  ]

  const courses = [
    {
      image: "/images/mccombs.jpg",
      institution: "MCCOMBS SCHOOL OF BUSINESS AT THE UNIVERSITY OF TEXAS AT AUSTIN",
      title: "PG Program in Artificial Intelligence and Machine Learning: Business Applications",
      duration: "7 months",
      format: "Online",
      schedule: "Weekend",
    },
    {
      image: "/images/mit-colorful.jpg",
      institution: "MIT PROFESSIONAL EDUCATION",
      title: "No Code AI and Machine Learning: Building Data Science Solutions",
      duration: "12 Weeks",
      format: "Onlddine",
      schedule: "Weekend",
    },
    {
      image: "/images/mit-campus.jpg",
      institution: "MIT PROFESSIONAL EDUCATION",
      title: "Applied Data Science Program",
      duration: "12 weeks",
      format: "Live Virtual",
      schedule: "Weekdays & Weekends",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Category Navigation Menu */}
        <div className="w-full md:w-1/4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Choose a top-rated program</h1>

          <div className="space-y-2">
            {categoryItems.map((item, index) => (
              <CategoryMenuItem key={index} icon={item.icon} label={item.label} active={item.active} />
            ))}

            <button className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
              <div className="flex items-center gap-3">
                <Plus className="w-5 h-5" />
                <span>Show more</span>
              </div>
            </button>
          </div>
        </div>

        {/* Course Listings */}
        <div className="w-full md:w-3/4">
          <div className="mb-6">
            <h2 className="text-sm font-medium text-gray-500 tracking-wider uppercase">POPULAR COURSES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                image={course.image}
                institution={course.institution}
                title={course.title}
                duration={course.duration}
                format={course.format}
                schedule={course.schedule}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default CourseCatalog;