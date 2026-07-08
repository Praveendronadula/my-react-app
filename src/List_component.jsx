// What are Lists?
// A list is a collection of items displayed on the screen.
// In React, we use JavaScript's map() method to display multiple items from an array.
// The map() method loops through each element in an array and returns a new array.
import React from "react";
import ListComponent from "./List_component";
function Lists() {

  const Courses = ["React", "Java", "Python", "Node JS"];

  return (
    <>
      <h2>Courses List</h2>

      {Courses.map((Course) => (
        <h3>{Course}</h3>
      ))}
    </>
  );
}

export default Lists;