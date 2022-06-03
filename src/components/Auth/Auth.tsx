import React, { useState } from "react";
import styles from "./auth.module.scss";
import { Link } from "react-router-dom";
import Input from "../Input/Input";

const Auth = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <form className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.title}>
          <Link to={"/login"} className={styles.active}>
            Войти
          </Link>
          <Link to={"/reg"}>Зарегистрироваться</Link>
        </div>
        <div className={styles.wrapperInputs}>
          <Input type={"text"} placeholder={"Имя или почта"} />
          <Input type={"text"} placeholder={"Пароль"} />
        </div>
        <button type="submit" className={styles.submit}>
          Войти
        </button>
      </div>
    </form>
  );
};

export default Auth;
