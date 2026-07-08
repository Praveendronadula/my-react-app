import React from "react";
import Lists from "./Student_Lists";
function Lists() {
  const students = [
    { id: 1, name: "Praveen", age: 22, course: "React" },
    { id: 2, name: "Rahul", age: 23, course: "Java" },
    { id: 3, name: "Kiran", age: 21, course: "Python" },
    { id: 4, name: "Anil", age: 24, course: "Node JS" }
  ];  

  return (
    <>
      <h2>Student Details</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Lists;