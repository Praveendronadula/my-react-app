// React Hooks are special functions introduced in React 16.8 that let you use state and other React features in--
//-- functional components, eliminating the need for class components in most cases.
// .................................1. useState..........................................................................
// Used to add state to a functional component.
import { useState } from "react";
function Hooks() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment btn
      </button>
    </div>
  );
}

export default Hooks;
// .......................................2. useEffect......................
// Used for side effects like:
// Fetching data
// API calls
// Timers
// Event listeners
// import { useState, useEffect } from "react";

// function Hooks() {
//   const [count, setCount] = useState(0);

//   // Runs once when the component mounts
//   useEffect(() => {
//     console.log("Hooks component mounted");
//   }, []);

//   // Runs whenever count changes
//   useEffect(() => {
//     console.log("Count changed:", count);
//   }, [count]);

//   return (
//     <div>
//       <h2>React useEffect Example</h2>
//       <h3>Count: {count}</h3>

//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//     </div>
//   );
// }

// export default Hooks;