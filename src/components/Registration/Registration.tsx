import React from "react";
import { Link } from "react-router-dom";
import styles from "./registration.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Registration = () => {
  return (
    <div className={styles.reg}>
      <div className={styles.title}>
        <Link to={"/login"} className={styles.login}>
          Войти
        </Link>
        <Link to={"/reg"} className={styles.signUp}>
          Зарегистрироваться
        </Link>
      </div>
      <div className={styles.infoAboutUser}>
        <Input type={"text"} placeholder={"Имя или ник"} />
        <Input type={"email"} placeholder={"Электронная почта"} />
      </div>
      <div className={styles.privateInfo}>
        <Input type={"password"} placeholder={"Пароль"} />
        <Input type={"password"} placeholder={"Подтвердить пароль"} />
      </div>
      <div className={styles.terms}>
        <input
          id="checkbox-custom"
          type="checkbox"
          className={styles.checkBox}
        />
        <label className={styles.checkBoxLabel} htmlFor="checkbox-custom">
          С <span>лицензионным соглашением</span>, включая{" "}
          <span>агентский договор</span> <br />
          <span>правилами сайта</span> ознакомился, принимаю в полном объеме
        </label>
      </div>
      <Button type={"submit"} title={"Зарегистрироваться"} variant={"purple"} />
    </div>
  );
};

export default Registration;
