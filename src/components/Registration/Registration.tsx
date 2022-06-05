import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./registration.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import authorization from "../../API/Auth/Auth";

const Registration = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.name;
    switch (target) {
      case "username":
        setUserData({ ...userData, username: event.target.value });
        break;
      case "email":
        setUserData({ ...userData, email: event.target.value });
        break;
      case "password":
        setUserData({ ...userData, password: event.target.value });
        break;
      default:
        return target;
    }
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    authorization(userData);
  };

  return (
    <form onSubmit={submit} className={styles.reg}>
      <div className={styles.title}>
        <Link to={"/login"} className={styles.login}>
          Войти
        </Link>
        <Link to={"/reg"} className={styles.signUp}>
          Зарегистрироваться
        </Link>
      </div>
      <div className={styles.infoAboutUser}>
        <Input
          onChange={changeHandler}
          name={"username"}
          value={userData.username}
          type={"text"}
          placeholder={"Имя или ник"}
        />
        <Input
          onChange={changeHandler}
          name={"email"}
          value={userData.email}
          type={"email"}
          placeholder={"Электронная почта"}
        />
      </div>
      <div className={styles.privateInfo}>
        <Input
          onChange={changeHandler}
          name={"password"}
          value={userData.password}
          type={"password"}
          placeholder={"Пароль"}
        />
        <Input
          onChange={changeHandler}
          name={""}
          type={"password"}
          placeholder={"Подтвердить пароль"}
        />
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
    </form>
  );
};

export default Registration;
