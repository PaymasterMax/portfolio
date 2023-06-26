import styles from "../shared-css/Layout.module.css";

const Menu = (props) => {
  return (
    <div
      className={styles._menu}
      onBlur={(e) => {
        alert("Hello there");
      }}
    >
      <div
        className={styles._link}
        onClick={(e) => {
          document.querySelector("#_page1")?.scrollIntoView();
          props.handleHumbuggerOpen();
        }}
      >
        Home
      </div>

      <div
        className={styles._link}
        onClick={(e) => {
          document.querySelector("#_page2")?.scrollIntoView();
          props.handleHumbuggerOpen();
        }}
      >
        Experience
      </div>

      <div
        className={styles._link}
        onClick={(e) => {
          document.querySelector("#_page3")?.scrollIntoView();
          props.handleHumbuggerOpen();
        }}
      >
        Skills
      </div>

      <div
        className={styles._link}
        onClick={(e) => {
          document.querySelector("#_page4")?.scrollIntoView();
          props.handleHumbuggerOpen();
        }}
      >
        Connect
      </div>
      <div
        className={styles._link}
        onClick={(e) => {
          document.querySelector("#_page5")?.scrollIntoView();
          props.handleHumbuggerOpen();
        }}
      >
        Hobbies
      </div>
    </div>
  );
};

export default Menu;
