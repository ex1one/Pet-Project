import React, { FC, InputHTMLAttributes } from "react";
import styles from "./input.module.scss";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
}

const Input: FC<IInputProps> = ({ type, placeholder, ...props }) => {
  return (
    <input
      type={type}
      {...props}
      placeholder={placeholder}
      className={styles.input}
    />
  );
};

export default Input;
