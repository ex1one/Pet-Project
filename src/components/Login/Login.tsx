import React from "react";
import styles from "./login.module.scss";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Login = () => {
  return (
    <>
      <div className={styles.title}>
        <Link to={"/login"} className={styles.login}>
          Войти
        </Link>
        <Link to={"/reg"} className={styles.signUp}>
          Зарегистрироваться
        </Link>
      </div>
      <div className={styles.wrapperInputs}>
        <Input type="text" placeholder="Имя или почта" />
        <Input type="text" placeholder="Пароль" />
      </div>
      <Button title="Войти" />
    </>
  );
};

export default Login;
