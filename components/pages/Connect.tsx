import React from "react";
import styles from "../shared-css/common.module.css";

interface ConnectProps {}

const Connect: React.FC = (props: ConnectProps) => {
  return (
    <div className={styles._baseline}>
      <h1>Connect With me: </h1>

      <div className={styles._tech_wrapper}>
        <p className={styles._progress}></p>
        <p className={styles._headliner}>GitHub</p>
        <div className={styles._tech}>
          <div className={styles._highlight_item}>
            <a
              href="https://github.com/PaymasterMax"
              target="_blank"
              rel="noreferrer"
            >
              Dan Kipchirchir
            </a>
          </div>
        </div>
      </div>

      <div className={styles._tech_wrapper}>
        <p className={styles._progress}></p>
        <p className={styles._headliner}>Twitter</p>
        <div className={styles._tech}>
          <div className={styles._highlight_item}>
            <a
              href="https://twitter.com/codemonste"
              target="_blank"
              rel="noreferrer"
            >
              Dan Kipchirchir
            </a>
          </div>
        </div>
      </div>

      <div className={styles._tech_wrapper}>
        <p className={styles._progress}></p>
        <p className={styles._headliner}>LinkedIn</p>
        <div className={styles._tech}>
          <div className={styles._highlight_item}>
            <a
              href="https://www.linkedin.com/in/dan-k-290359182/"
              target="_blank"
              rel="noreferrer"
            >
              Dan Kipchirchir
            </a>
          </div>
        </div>
      </div>

      <div className={styles._tech_wrapper}>
        <p className={styles._progress}></p>
        <p className={styles._headliner}>Telephone</p>
        <div className={styles._tech}>
          <div className={styles._highlight_item}>
            <a href="tel:+254797494509" target="_blank" rel="noreferrer">
              {" "}
              +254797494509
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
