import React, { useState } from "react";
import logo from "../../../public/img/logo.svg";
import company from "../../../public/img/company.svg";
import styles from "./header.module.scss";
import Menu from "../Menu/Menu";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapperLogo}>
          <img src={logo} />
          <img src={company} />
          <nav onClick={handleClick} className={styles.wrapperCircle}>
            <div className={styles.burgerMenu}>
              <span></span>
            </div>
          </nav>
          {show && <Menu />}
        </div>
        <div className={styles.sideBar}></div>
      </div>
    </header>
  );
};

export default Header;
