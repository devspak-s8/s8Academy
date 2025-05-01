import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // your homepage
import CourseDetails from "./pages/CourseDetails"; // new page (e.g., About, Contact, etc.)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courseDetails" element={<CourseDetails/>} />
        {/* Add more pages here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
