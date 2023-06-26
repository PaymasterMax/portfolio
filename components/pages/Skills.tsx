import React from "react";
import styles from "../shared-css/common.module.css";

interface SkillsProps {}

const Skills: React.FC = (props: SkillsProps) => {
  return (
    <div className={styles._baseline}>
      <h1>Technologies</h1>
      <div className={styles._tech_wrapper}>
        <p className={styles._progress}></p>
        <p className={styles._headliner}>Web Developer</p>
        <div className={styles._tech}>
          <div className={styles._inner_headliner}>Backend</div>
          <div className={styles._highlight_item}>
            {" "}
            <p className={styles._dot}> </p>Django
          </div>
          <div className={styles._highlight_item}>
            {" "}
            <p className={styles._dot}></p> Nodejs
          </div>
          <div className={styles._highlight_item}>
            {" "}
            <p className={styles._dot}></p> Firebase
          </div>
        </div>

        <div className={styles._tech}>
          <div className={styles._inner_headliner}>Front-end</div>
          <div className={styles._highlight_item}>
            {" "}
            <p className={styles._dot}> </p>Html, CSS, VanilaJs
          </div>
          <div className={styles._highlight_item}>
            {" "}
            <p className={styles._dot}> </p>Material UI
          </div>
          <div className={styles._highlight_item}>
            {" "}
            <p className={styles._dot}> </p>NextJs
          </div>
          <div className={styles._highlight_item}>
            {" "}
            <p className={styles._dot}> </p>ReactJs
          </div>
        </div>
      </div>

      <div className={styles._tech_wrapper}>
        <p className={styles._progress}></p>
        <p className={styles._headliner}>Data Science</p>
        <div className={styles._tech}>
          <div className={styles._inner_headliner}>Areas Of specialization</div>
          <div className={styles._highlight_item}>
            {" "}
            <p className={styles._dot}> </p>Supervised Learning
          </div>
          <div className={styles._highlight_item}>
            {" "}
            <p className={styles._dot}> </p>Unsupervised Learning
          </div>
        </div>
      </div>

      <div className={styles._tech_wrapper}>
        <p className={styles._progress}></p>
        <p className={styles._headliner}>System Administrator</p>
        <div className={styles._tech}>
          <div className={styles._inner_headliner}>Core Skills</div>
          <div className={styles._highlight_item}>
            {" "}
            <p className={styles._dot}> </p>Virtualization
          </div>
          <div className={styles._highlight_item}>
            {" "}
            <p className={styles._dot}> </p>Bash Scripting
          </div>
          <div className={styles._highlight_item}>
            {" "}
            <p className={styles._dot}> </p>Containerization
          </div>
        </div>
      </div>

      <div className={styles._tech_wrapper}>
        <p className={styles._progress}></p>
        <p className={styles._headliner}>3D Modelling</p>
        <div className={styles._tech}>
          <div className={styles._inner_headliner}>Core Skills</div>
          <div className={styles._highlight_item}>
            {" "}
            <p className={styles._dot}> </p>Rigging
          </div>
          <div className={styles._highlight_item}>
            {" "}
            <p className={styles._dot}> </p>Interior Designs
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
