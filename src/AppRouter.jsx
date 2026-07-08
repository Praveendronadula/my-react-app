import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const AppRouter = () => {

  const Student = () => <h2>Student Page</h2>;
  const Faculty = () => <h2>Faculty Page</h2>;
  const Courses = () => <h2>Courses Page</h2>;

  return (
    <Router>
      <div>
        <h1>College Portal</h1>

        <nav>
          <Link to="/">Student</Link> |{" "}
          <Link to="/faculty">Faculty</Link> |{" "}
          <Link to="/courses">Courses</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;