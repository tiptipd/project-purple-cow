// * Libraries
import React from "react";
import CountUp from "react-countup";

// * Assets
import "../App.css";

// Counter component
const Counter = ({ currentCount, previousCount }) => {

  // Micro-component for animating count-up for current count number
  const CountAnimated = () => {
    return (
      <CountUp
        start={previousCount}
        end={currentCount}
        duration={1}
        separator=","
        decimal=","
        delay={0}
      >
        {({ countUpRef }) => <span ref={countUpRef} />}
      </CountUp>
    );
  };

  // Renderer for component
  return (
    <h1>
      Count {" "}
      <code>
        <CountAnimated />
      </code>
    </h1>
  );
};

// Exporter for component
export default Counter;
