import styles from "../shared-css/common.module.css";

export default (props) => {
  return (
    <div className={styles._baseline}>
      <h1>Hobbies</h1>
      <div className={styles._tech_wrapper}>
        <p className={styles._progress}></p>
        <p className={styles._headliner}>Swimming</p>
        <div className={styles._hobby}>
          <div className={styles._hobby_img}>
            <img
              src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3dpbW1pbmclMjBwb29sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />{" "}
          </div>
          <div className={styles._hobby_description}>Ok World</div>
        </div>
      </div>

      <div className={styles._tech_wrapper}>
        <p className={styles._progress}></p>
        <p className={styles._headliner}>Chess</p>
        <div className={styles._hobby}>
          <div className={styles._hobby_img}>
            <img
              src="https://images.unsplash.com/photo-1580541832626-2a7131ee809f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />{" "}
          </div>
          <div className={styles._hobby_description}>Ok World</div>
        </div>
      </div>
    </div>
  );
};
