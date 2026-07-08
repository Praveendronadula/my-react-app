// Inline Styles
// Definition
// Inline styles are applied directly to an element using the style attribute in JSX.
// Unlike HTML, React expects the style attribute to receive a JavaScript object, not a string.
import Styles from "./Styles";
function style() {

  return (
    <>
    <h1 style={{ color: "red" }}>
      Hello React
    </h1>
    
      <div
      style={{
        color: "white",
        backgroundColor: "blue",
        padding: "20px",
        borderRadius: "10px"
      }}
    >
      Welcome to React
    </div>
    </>
  );
}

export default style;

