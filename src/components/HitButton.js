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
  const hitCounter = async () => {
    setPreviousCount(currentCount);
    await countapi.hit(NAMESPACE, KEY).then((result) => {
      setcurrentCount(result.value.toString());
    });
  };

  // Renderer for component
  return (
    <button onClick={() => hitCounter()} className="App-link">
      Hit !
    </button>
  );
};

// Exporter for component
export default Button;
