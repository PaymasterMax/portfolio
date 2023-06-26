import React, { useState } from "react";
import styles from "../shared-css/common.module.css";

interface ExperienceProps {}

const Experience: React.FC = (props: ExperienceProps) => {
  const [workedAt, setWorkedAt] = useState([
    {
      company_name: "Circularity Space",
      role: "Web developer / Sys Admin",
      duties: [{}],
    },

    {
      company_name: "Meliora Technologies",
      role: "Software developer / Sys Admin",
      duties: [{}],
    },

    {
      company_name: "Candid Africa",
      role: "Software developer / Sys Admin",
      duties: [{}],
    },

    {
      company_name: "IHub",
      role: "Software developer / Sys Admin",
      duties: [{}],
    },
  ]);

  return (
    <div className={styles._baseline}>
      <h1>Experience</h1>
      {workedAt.map((currItem, index) => (
        <div className={styles._tech_wrapper} key={index}>
          <p className={styles._progress}></p>
          <p className={styles._headliner}>{currItem.company_name}</p>
          <div className={styles._tech}>
            <div className={styles._inner_headliner}>
              Role - {currItem.role}
            </div>
            <div className={styles._highlight_item}>
              <p className={styles._dot}> </p>Django
            </div>
            <div className={styles._highlight_item}>
              <p className={styles._dot}></p> Nodejs
            </div>
            <div className={styles._highlight_item}>
              <p className={styles._dot}></p> Firebase
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Experience;
