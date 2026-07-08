// What are Lists?
// A list is a collection of items displayed on the screen.
// In React, we use JavaScript's map() method to display multiple items from an array.
// The map() method loops through each element in an array and returns a new array.

function Lists() {

  const students = ["Praveen", "Rahul", "Kiran", "Anil"];

  return (
    <>
      <h2>Student List</h2>

      {students.map((student) => (
        <h3>{student}</h3>
      ))}
    </>
  );
}

export default Lists;