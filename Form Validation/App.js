import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const [enteredInput, setEnteredInput] = useState("Invalid");
  const validationHandler = (event) => {
    if (event.target.value.trim().length < 3) {
      setEnteredInput("Invalid");
    } else {
      setEnteredInput("Valid");
    }
  };
  return (
    <form>
      <label>Your message</label>
      <input type="text" onChange={validationHandler} />
      <p>{enteredInput}</p>
    </form>
  );
}
