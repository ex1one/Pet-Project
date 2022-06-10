import React from "react";
import styles from "./menu.module.scss";
import { Link } from "react-router-dom";
import { menu } from "../../constants/menu";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <ul className={styles.menuContent}>
        {menu.map((item) => (
          <li className={styles.item}>
            <Link className={styles.itemLink} to={item.path}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
