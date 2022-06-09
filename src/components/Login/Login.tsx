import React, { useState } from "react";
import styles from "./login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { ILogin } from "../../API/Login/types";
import LoginFormValidate from "../../schemes/LoginValidation";
import login from "../../API/Login/Login";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/reducers/login";

const Login = () => {
  const [userData, setUserData] = useState({
    identifier: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILogin>({
    mode: "onSubmit",
    resolver: yupResolver(LoginFormValidate),
  });

  const submit: SubmitHandler<ILogin> = () => {
    login(userData).then((response) => {
      dispatch(signIn(response.data));
    });
    navigate("/");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className={styles.title}>
        <Link to={"/login"} className={styles.login}>
          Войти
        </Link>
        <Link to={"/auth"} className={styles.signUp}>
          Зарегистрироваться
        </Link>
      </div>
      <Input
        type="text"
        placeholder="Имя или почта"
        {...register("identifier", {
          onChange: (event) => {
            setUserData({
              ...userData,
              identifier: event.target.value,
            });
          },
        })}
      />
      {errors.identifier?.message && (
        <span className={styles.alerts}>{errors.identifier?.message}</span>
      )}
      <Input
        type="text"
        placeholder="Пароль"
        {...register("password", {
          onChange: (event) => {
            setUserData({
              ...userData,
              password: event.target.value,
            });
          },
        })}
      />
      {errors.password?.message && (
        <span className={styles.alerts}>{errors.password?.message}</span>
      )}
      <Button type={"submit"} title="Войти" variant={"yellow"} />
    </form>
  );
};

export default Login;
