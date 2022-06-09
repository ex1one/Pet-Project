import React, { useState } from "react";
import styles from "./login.module.scss";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.name;

    switch (target) {
      case "name": {
        setUsername(event.target.value);
        break;
      }
      case "password": {
        setPassword(event.target.value);
        break;
      }
      default:
        return target;
    }
  };

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
      <Input
        onChange={handleChange}
        name={"name"}
        type="text"
        placeholder="Email"
      />
      <Input
        onChange={handleChange}
        name={"password"}
        type="text"
        placeholder="Пароль"
      />
      <Button type={"submit"} title="Войти" variant={"yellow"} />
    </>
  );
};

export default Login;
