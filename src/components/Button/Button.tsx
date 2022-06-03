import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import styles from "./button.module.scss";

interface IButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
}

const Button: FC<IButtonProps> = ({ title, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {title}
    </button>
  );
};

export default Button;
