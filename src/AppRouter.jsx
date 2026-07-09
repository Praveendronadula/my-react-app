import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import StudentLists from "./Student_Lists";
import CourseLists from "./Course_Lists";
import Faculty from "./Faculty";

function AppRouter() {
  return (
    <Router>
      <div>
        <h1>College Portal</h1>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/student">Student</Link> |{" "}
          <Link to="/faculty">Faculty</Link> |{" "}
          <Link to="/courses">Courses</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<StudentLists />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/courses" element={<CourseLists />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;