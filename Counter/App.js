import React, { useState } from "react";

import "./Styles.css";

let count = 0;
// don't change the Component name "App"
export default function App() {
  const [enteredValue, setEnteredValue] = useState(count);

  const clickHandler = () => {
    setEnteredValue(++count);
  };
  return (
    <div>
      <p id="counter">{enteredValue}</p>
      <button onClick={clickHandler}>Increment</button>
    </div>
  );
}
