import styles from "./App.module.css";
import Display from "./Components/Display";
import Buttons from "./Components/Buttons";
import { useState, useEffect } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      try {
        const result = eval(calVal);
        setCalVal(result.toString());
      } catch (error) {
        setCalVal("Error");
      }
    } else if (buttonText === "←") {
      // Handle backspace - remove the last character
      setCalVal(calVal.slice(0, -1));
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;

      // Numbers, operators and decimal point
      if (/^[0-9+\-*/.=]$/.test(key)) {
        onButtonClick(key);
      }
      // Enter key for equals
      else if (key === "Enter") {
        onButtonClick("=");
      }
      // Escape or Delete for clear
      else if (key === "Escape" || key === "Delete") {
        onButtonClick("C");
      }
      // Backspace for deleting last character
      else if (key === "Backspace") {
        onButtonClick("←");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Clean up event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [calVal]); // Add calVal as dependency since onButtonClick uses it

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className={`${styles.calculator} card shadow p-3`}>
        <h4 className="text-center text-light mb-3">Calculator</h4>
        <Display displayValue={calVal} />
        <Buttons onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}

export default App;
