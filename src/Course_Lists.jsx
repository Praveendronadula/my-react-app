// What are Lists?
// A list is a collection of items displayed on the screen.
// In React, we use JavaScript's map() method to display multiple items from an array.
// The map() method loops through each element in an array and returns a new array.
function CourseLists() {
  const courses = ["React", "Java", "Python", "Node JS"];

  return (
    <>
      <h2>Courses List</h2>

      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </>
  );
}

export default CourseLists;