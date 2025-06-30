import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Core Pages
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails";
import ProfilePage from "./pages/ProfilePage";
import SignupForm from "./pages/signup-form";
import UserDashboard from "./pages/UserDashboard";

// Courses
import AllCourses from "./pages/courses/AllCourses";
import CreateCourse from "./pages/courses/CreateCourse";
import Categories from "./pages/courses/Categories";

// Lessons
import AllLessons from "./pages/lessons/AllLessons";
import UploadLesson from "./pages/lessons/UploadLesson";

// Students
import AllStudents from "./pages/students/AllStudents";
import Enrollments from "./pages/students/Enrollments";

// Assessments
import Quizzes from "./pages/assessments/Quizzes";
import Assignments from "./pages/assessments/Assignments";
import Grades from "./pages/assessments/Grades";

// Resources
import AllResources from "./pages/resources/AllResources";
import AddResource from "./pages/resources/AddResource";

// Analytics
import StudentProgress from "./pages/analytics/StudentProgress";
import CourseStats from "./pages/analytics/CourseStats";

// Settings
import General from "./pages/settings/General";
import InstructorProfile from "./pages/settings/InstructorProfile";

// Support & Feedback
import Support from "./pages/support/Support";
import Feedback from "./pages/feedback/Feedback";

import MultiStepForm from "./pages/account-form";
import StudentDashboard from "./pages/dashboard/StudentDashboard";
function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/courseDetails/:id" element={<CourseDetails />} />
        <Route path="/profilePage" element={<ProfilePage />} />
        <Route path="/signup-form" element={<SignupForm />} />

        {/* Dashboard Layout */}
         <Route path="/dashboard" element={<UserDashboard />}>
          {/* Nested inside sidebar layout */}
          <Route path="courses" element={<AllCourses />} />
          <Route path="courses/create" element={<CreateCourse />} />
          <Route path="courses/categories" element={<Categories />} />

          <Route path="student-dashboard" element={<StudentDashboard />} />
          
          <Route path="lessons" element={<AllLessons />} />
          <Route path="lessons/upload" element={<UploadLesson />} />

          <Route path="students" element={<AllStudents />} />
          <Route path="students/enrollments" element={<Enrollments />} />

          <Route path="assessments/quizzes" element={<Quizzes />} />
          <Route path="assessments/assignments" element={<Assignments />} />
          <Route path="assessments/grades" element={<Grades />} />

          <Route path="resources" element={<AllResources />} />
          <Route path="resources/add" element={<AddResource />} />

          <Route path="analytics/progress" element={<StudentProgress />} />
          <Route path="analytics/courses" element={<CourseStats />} />

          <Route path="settings/general" element={<General />} />
          <Route path="settings/profile" element={<InstructorProfile />} />

          <Route path="support" element={<Support />} />
          <Route path="feedback" element={<Feedback />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
