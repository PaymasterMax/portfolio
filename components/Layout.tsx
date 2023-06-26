import React, { useEffect, useState } from "react";
import Humbugger from "./common/Humbugger";

// import dev mods
import Menu from "./common/Menu";

import styles from "./shared-css/Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = (props: LayoutProps) => {
  const [humOpen, setHamOpen] = useState<React.SetStateAction<boolean>>(false);
  const handleHumbuggerOpen = (e: React.MouseEvent<HTMLElement>) => {
    setHamOpen((prev) => !prev);
  };

  useEffect(() => {}, [humOpen]);

  return (
    <div className={styles._wrapper}>
      <Humbugger {...{ humOpen, handleHumbuggerOpen }} />
      {humOpen ? <Menu {...{ humOpen, handleHumbuggerOpen }} /> : null}
      {props.children}
    </div>
  );
};

export default Layout;
