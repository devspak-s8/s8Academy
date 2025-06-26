import React from 'react';
import {
  Search,
  Bell,
  Settings,
  BarChart3,
  Users,
  FolderOpen,
  Home,
  Clock,
  CheckCircle,
  MoreHorizontal,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const StudentDashboard = () => {


    const courses = [
  {
    id: 1,
    name: "Introduction to Computer Science",
    code: "CS101",
    instructor: "Dr. Jane Doe",
    progress: 80,
  },
  {
    id: 2,
    name: "Advanced Mathematics",
    code: "MTH201",
    instructor: "Prof. John Smith",
    progress: 65,
  },
  {
    id: 3,
    name: "Digital Marketing",
    code: "MKT104",
    instructor: "Ms. Amina Lawal",
    progress: 90,
  },
];

const grades = [
  {
    course: "Introduction to Computer Science",
    grade: "A",
    score: 92,
    status: "Passed",
  },
  {
    course: "Advanced Mathematics",
    grade: "B+",
    score: 85,
    status: "Passed",
  },
  {
    course: "Digital Marketing",
    grade: "A-",
    score: 88,
    status: "Passed",
  },
  {
    course: "Physics Fundamentals",
    grade: "C+",
    score: 73,
    status: "Needs Improvement",
  },
];

const messages = [
  {
    from: "Dr. Jane Doe",
    subject: "Assignment Feedback",
    time: "2 hours ago",
    preview: "Hi, I reviewed your recent assignment on algorithms...",
  },
  {
    from: "Admin Office",
    subject: "Fee Reminder",
    time: "1 day ago",
    preview: "This is a friendly reminder that your semester fee...",
  },
  {
    from: "Prof. John Smith",
    subject: "Class Rescheduled",
    time: "3 days ago",
    preview: "Tomorrow's Math class has been moved to 11am...",
  },
];

const todos = [
  {
    id: 1,
    task: "Finish Data Structures Assignment",
    dueDate: "2025-06-20",
    completed: false,
  },
  {
    id: 2,
    task: "Join Zoom class for MKT104",
    dueDate: "2025-06-19",
    completed: true,
  },
  {
    id: 3,
    task: "Submit feedback for CS101 project",
    dueDate: "2025-06-22",
    completed: false,
  },
];

      const overviewStats = [
    { title: "Total Projects", value: "18", icon: FolderOpen, color: "bg-blue-500" },
    { title: "Completed", value: "23", icon: CheckCircle, color: "bg-green-500" },
    { title: "In Progress", value: "15", icon: Clock, color: "bg-orange-500" },
    { title: "Team Members", value: "87", icon: Users, color: "bg-purple-500" },
  ]

  const assignments = [
    {
      id: 1,
      title: "Emergency task",
      dueDate: "May 2022",
      status: "urgent",
      priority: "High",
    },
    {
      id: 2,
      title: "Review design task",
      dueDate: "May 2022",
      status: "in-progress",
      priority: "Medium",
    },
    {
      id: 3,
      title: "Planning task",
      dueDate: "June",
      status: "completed",
      priority: "Low",
    },
  ]

  const upcomingEvents = [
    { title: "Team Meeting", time: "10:00 AM", color: "bg-red-500" },
    { title: "Project Review", time: "2:00 PM", color: "bg-blue-500" },
    { title: "Client Call", time: "4:00 PM", color: "bg-green-500" },
  ]

  const activityData = [
    { day: "Mon", hours: 6 },
    { day: "Tue", hours: 8 },
    { day: "Wed", hours: 4 },
    { day: "Thu", hours: 9 },
    { day: "Fri", hours: 7 },
    { day: "Sat", hours: 3 },
    { day: "Sun", hours: 5 },
  ]

  const maxHours = Math.max(...activityData.map((d) => d.hours))

  return (
     <div style={{ display: "flex",  fontFamily: "Arial, sans-serif" }}>
      <div className="flex-1 flex">
        <div className="flex-1 p-6 ">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Hello Alyssa 👋</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input placeholder="Search" className="pl-10 w-64" />
              </div>
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Overview</h2>
            <div className="grid grid-cols-4 gap-4">
              {overviewStats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                      </div>
                      <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Activity Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between h-48 gap-2">
                  {activityData.map((data, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 flex-1">
                      <div
                        className="bg-blue-500 rounded-t-sm w-full transition-all duration-300"
                        style={{ height: `${(data.hours / maxHours) * 100}%`, minHeight: "20px" }}
                      ></div>
                      <span className="text-xs text-gray-600">{data.day}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800 mb-2">68%</div>
                    <div className="w-32 h-32 mx-auto relative">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="#3b82f6"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${68 * 2.51} 251`}
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">My Assignments</h2>
            <Card>
              <CardContent className="p-0 divide-y">
                {assignments.map((assignment) => (
                  <div key={assignment.id} className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${assignment.status === "urgent" ? "bg-red-500" : assignment.status === "in-progress" ? "bg-orange-500" : "bg-green-500"}`} />
                      <div>
                        <h4 className="font-medium text-gray-800">{assignment.title}</h4>
                        <p className="text-sm text-gray-600">{assignment.dueDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={assignment.priority === "High" ? "destructive" : assignment.priority === "Medium" ? "default" : "secondary"}>{assignment.priority}</Badge>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Courses Enrolled</h2>
            <div className="space-y-4">
              {courses.map((course) => (
                <Card key={course.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-gray-800">{course.title}</h4>
                        <p className="text-sm text-gray-600">{course.instructor}</p>
                      </div>
                      <div className="text-sm text-gray-500">{course.schedule}</div>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded mt-3">
                      <div className="bg-blue-600 h-2 rounded" style={{ width: `${course.progress}%` }}></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Grades</h2>
            <div className="grid grid-cols-2 gap-4">
              {grades.map((grade) => (
                <Card key={grade.subject}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{grade.subject}</span>
                      <span className="font-bold text-lg text-green-600">{grade.score}</span>
                    </div>
                    <p className="text-sm text-gray-500">{grade.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Messages & Announcements</h2>
            <div className="space-y-3">
              {messages.map((msg, i) => (
                <Card key={i}>
                  <CardContent className="p-3">
                    <p className="text-sm font-medium text-gray-800">{msg.title}</p>
                    <p className="text-xs text-gray-500">{msg.preview}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">To-Do List</h2>
            <div className="space-y-2">
              {todos.map((todo, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input type="checkbox" checked={todo.done} className="form-checkbox" />
                  <label className="text-sm text-gray-700">{todo.task}</label>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="w-80 p-6 bg-white border-l">
          <div className="text-center mb-8">
            <Avatar className="w-16 h-16 mx-auto mb-4">
              <AvatarImage src="/placeholder.svg?height=64&width=64" />
              <AvatarFallback>AH</AvatarFallback>
            </Avatar>
            <h3 className="font-semibold text-gray-800">Alyssa Hebert</h3>
            <p className="text-sm text-gray-600">Student</p>
          </div>

          <div className="mb-8">
            <h4 className="font-semibold text-gray-800 mb-4">Upcoming Events</h4>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`w-3 h-3 ${event.color} rounded-full`}></div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 text-sm">{event.title}</p>
                    <p className="text-xs text-gray-600">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="font-semibold text-gray-700 mb-4">Calendar</h4>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-600 mb-2">Today</p>
              <p className="text-lg font-bold text-gray-800">{new Date().toDateString()}</p>
            </div>
          </div>

          <div className="space-y-3">
            <Button className="w-full bg-red-500 hover:bg-red-600">Emergency</Button>
            <Button className="w-full" variant="outline">Schedule Meeting</Button>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">New Project</Button>
            <Button className="w-full bg-green-500 hover:bg-green-600">Complete Task</Button>
          </div>

          <div className="mt-8">
            <h4 className="font-semibold text-gray-700 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-blue-600">
              <li><a href="#">📅 Timetable</a></li>
              <li><a href="#">📖 Study Resources</a></li>
              <li><a href="#">📥 Submit Assignment</a></li>
              <li><a href="#">👨‍🏫 Contact Instructor</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
