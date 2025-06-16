import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // your homepage
import CourseDetails from "./pages/CourseDetails"; // new page (e.g., About, Contact, etc.)
import ProfilePage from "./pages/ProfilePage";
import SignupForm from "./pages/signup-form";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courseDetails/:id" element={<CourseDetails/>} />
        <Route path="/ProfilePage" element={<ProfilePage/>} />
        <Route path="/signup-form" element={<SignupForm />} />
        {/* Add more pages here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
