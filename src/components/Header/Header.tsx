import React from "react";
import logo from "../../../public/img/logo.svg";
import company from "../../../public/img/company.svg";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.wrapperLogo}>
          <img src={logo} className={styles.logo} />
          <img src={company} className={styles.logo} />
        </div>
        <div className={styles.sideBar}></div>
      </div>
    </header>
  );
};

export default Header;
