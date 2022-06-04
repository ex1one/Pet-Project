import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import styles from "./button.module.scss";

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
  variant: "yellow" | "purple";
  type: "submit" | "reset" | "button";
}

const Button: FC<IButtonProps> = ({ title, variant, type, ...props }) => {
  return (
    <button
      type={type}
      className={
        variant == "yellow"
          ? [styles.button, styles.yellow].join(" ")
          : [styles.button, styles.purple].join(" ")
      }
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
