import styles from "./Button.module.css";

const Buttons = ({ onButtonClick }) => {
  const ButtonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
    ".",
    "←",
  ];

  // Define button classes based on type with updated colors
  const getButtonClass = (btn) => {
    let className = `${styles.button} btn `;

    if (btn === "C") {
      className += "btn-danger"; // Red for clear
    } else if (btn === "←") {
      className += "btn-warning"; // Yellow for backspace
    } else if (["+", "-", "*", "/"].includes(btn)) {
      className += "btn-info"; // Blue for operators
    } else if (btn === "=") {
      className += "btn-success"; // Green for equals
    } else if (btn === ".") {
      className += "btn-secondary"; // Gray for decimal
    } else {
      className += "btn-dark"; // Dark for numbers
    }

    return className;
  };

  return (
    <div className={`${styles.buttonsContainer} mt-3`}>
      {ButtonNames.map((buttonName, index) => (
        <button
          key={index}
          className={getButtonClass(buttonName)}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
