import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input
      className={`${styles.display} form-control form-control-lg text-end mb-3`}
      type="text"
      value={displayValue}
      readOnly
    />
  );
};

export default Display;
