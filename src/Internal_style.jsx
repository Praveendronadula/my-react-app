// 2. Internal Styles
// Definition
// Instead of writing styles directly inside JSX, create a JavaScript object (variable) containing all the styles and pass that variable to the style attribute.
// This is useful when the same styles are reused.
function Internal() {
  const headingStyle = {
    color: "green",
    backgroundColor: "yellow",
    padding: "15px",
    textAlign: "center"
  };
  const heading = {
    color: "blue",
    fontSize: "35px"
  };
  const button = {
    backgroundColor: "green",
    color: "white",
    padding: "10px"
  };
  return (
    <>
     <h1 style={headingStyle}>
      Internal Styling
    </h1>

      <h1 style={heading}>React</h1>

      <button style={button}>
        Click Me
      </button>
    </>
  );
}
export default Internal;