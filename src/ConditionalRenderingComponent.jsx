import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function ConditionalRenderingComponent() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Go to Register" : "Go to Login"}
      </button>

      <hr />

      {isLogin ? <Login /> : <Register />}
    </div>
  );
}

export default ConditionalRenderingComponent;