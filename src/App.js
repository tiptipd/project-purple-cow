// * Libraries
import { useEffect, useState } from "react";
import countapi from "countapi-js";

// * Components
import HitButton from "./components/HitButton";
import ResetButton from "./components/ResetButton";
import Counter from "./components/Counter";

// * Assets
import logo from "./logo.svg";
import "./App.css";

// Importing namespace and key from .env
const NAMESPACE = process.env.REACT_APP_NAMESPACE;
const KEY = process.env.REACT_APP_KEY;

// Main app
function App() {

  // app state for current and previous count
  const [currentCount, setcurrentCount] = useState(0);
  const [previousCount, setPreviousCount] = useState(0);

  // gets and sets current count when app is first mounted
  useEffect(() => {
    getCurrentCount();
  }, []);

  // function for getting and setting current count
  const getCurrentCount = async () => {
    await countapi.get(NAMESPACE, KEY).then((result) => {
      setcurrentCount(result.value.toString());
    });
  };

  // main renderer
  return (
    <div className="App">
      <header className="App-header">

        {/* Hovering image */}
        <img src={logo} className="App-logo" alt="logo animation" />

        {/* Counter display component */}
        <Counter currentCount={currentCount} previousCount={previousCount} />

        {/* HitButton display component */}
        <HitButton
          setcurrentCount={setcurrentCount}
          currentCount={currentCount}
          setPreviousCount={setPreviousCount}
        />
        
      </header>
    </div>
  );
}

export default App;
