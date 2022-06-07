import React, { FC, InputHTMLAttributes } from "react";
import styles from "./input.module.scss";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder?: string;
  name?: string;
}

const Input: FC<IInputProps> = ({
  type,
  placeholder,
  name,
  onChange,
  ...props
}) => {
  return (
    <input
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.input}
      {...props}
    />
  );
};

export default Input;
