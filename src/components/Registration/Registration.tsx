import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./registration.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import authorization from "../../API/Auth/Auth";
import { useDispatch } from "react-redux";
import { Authorization } from "../../store/reducers/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { IAuth } from "../../API/Auth/types";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthFormValidate from "../../schemes/AuthValidation";

const Registration = () => {
  const [userData, setUserData] = useState<IAuth>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit: SubmitHandler<IAuth> = () => {
    authorization(userData).then((response) => {
      dispatch(Authorization(response.data));
    });
    navigate("/");
    reset();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IAuth>({
    mode: "onSubmit",
    resolver: yupResolver(AuthFormValidate),
  });

  return (
    <form onSubmit={handleSubmit(submit)} className={styles.reg}>
      <div className={styles.title}>
        <Link to={"/login"} className={styles.login}>
          Войти
        </Link>
        <Link to={"/auth"} className={styles.signUp}>
          Зарегистрироваться
        </Link>
      </div>
      <div className={styles.infoAboutUser}>
        <div className={styles.wrapper}>
          <Input
            type={"text"}
            placeholder={"Имя или ник"}
            {...register("username", {
              onChange: (event) => {
                setUserData({
                  ...userData,
                  username: event.target.value,
                });
              },
            })}
          />
          {errors.username?.message && (
            <span className={styles.alerts}>{errors.username?.message}</span>
          )}
        </div>
        <div className={styles.wrapper}>
          <Input
            type={"email"}
            placeholder={"Электронная почта"}
            {...register("email", {
              onChange: (event) => {
                setUserData({
                  ...userData,
                  email: event.target.value,
                });
              },
            })}
          />
          {errors.email?.message && (
            <span className={styles.alerts}>{errors.email?.message}</span>
          )}
        </div>
      </div>
      <div className={styles.privateInfo}>
        <div className={styles.wrapper}>
          <Input
            type={"password"}
            placeholder={"Пароль"}
            {...register("password", {
              onChange: (event) =>
                setUserData({
                  ...userData,
                  password: event.target.value,
                }),
            })}
          />
          {errors.password?.message && (
            <span className={styles.alerts}>{errors.password?.message}</span>
          )}
        </div>
        <div className={styles.wrapper}>
          <Input
            type={"password"}
            placeholder={"Подтвердить пароль"}
            {...register("confirmPassword", {
              onChange: (event) => {
                setUserData({
                  ...userData,
                  confirmPassword: event.target.value,
                });
              },
            })}
          />
          {errors.confirmPassword?.message && (
            <span className={styles.alerts}>
              {errors.confirmPassword?.message}
            </span>
          )}
        </div>
      </div>
      <div className={styles.terms}>
        <input
          id="checkbox-custom"
          type="checkbox"
          className={styles.checkBox}
          {...register("terms")}
        />
        <label className={styles.checkBoxLabel} htmlFor="checkbox-custom">
          С <span>лицензионным соглашением</span>, включая{" "}
          <span>агентский договор</span> <br />
          <span>правилами сайта</span> ознакомился, принимаю в полном объеме
        </label>
        {errors.terms && (
          <span className={styles.alertTerms}>{errors.terms.message}</span>
        )}
      </div>
      <Button type={"submit"} title={"Зарегистрироваться"} variant={"purple"} />
    </form>
  );
};

export default Registration;
