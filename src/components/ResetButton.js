// * Libraries
import React from "react";
import countapi from "countapi-js";

// * Assets
import "../App.css";

// Importing namespace and key from .env
const NAMESPACE = process.env.REACT_APP_NAMESPACE;
const KEY = process.env.REACT_APP_KEY;

// Button component
const Button = ({ setcurrentCount, setPreviousCount, currentCount }) => {
  // function for incrementing the count on hit button
  const resetCounter = async () => {
    setPreviousCount(currentCount);
    await countapi.set(NAMESPACE, KEY, 0).then((result) => {
      console.log("RESET", result);
      setcurrentCount(result.value.toString());
    });
  };

  // Renderer for component
  return (
    <button onClick={() => resetCounter()} className="App-link">
      RESET
    </button>
  );
};

// Exporter for component
export default Button;
