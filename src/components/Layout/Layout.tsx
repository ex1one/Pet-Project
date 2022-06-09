import React, { FC, ReactNode } from "react";
import styles from "./layout.module.scss";
import useTheme from "../../hooks/useTheme";

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  const { isDark } = useTheme();
  return (
    <div
      className={
        isDark ? styles.layout : [styles.layout, styles.light].join(" ")
      }
    >
      {children}
    </div>
  );
};

export default Layout;
