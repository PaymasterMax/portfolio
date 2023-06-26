import React from "react";
import styles from "../shared-css/Layout.module.css";

interface Props {
  handleHumbuggerOpen: (e: React.MouseEvent<HTMLElement>) => void;
  humOpen: React.SetStateAction<boolean>;
}
const Humbugger = ({ handleHumbuggerOpen, humOpen }: Props) => {
  return (
    <div
      className={humOpen ? styles._humbugger : styles._humbugger}
      onClick={handleHumbuggerOpen}
    >
      <div
        className={
          humOpen
            ? `${styles._humbugger_bar} ${styles._first_line}`
            : styles._humbugger_bar
        }
      ></div>
      <div className={humOpen ? null : styles._humbugger_bar}></div>
      <div
        className={
          humOpen
            ? `${styles._humbugger_bar} ${styles._third_line}`
            : styles._humbugger_bar
        }
      ></div>
    </div>
  );
};

export default Humbugger;
