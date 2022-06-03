import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface IButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
}

const Button: FC<IButtonProps> = ({ title, ...props }) => {
  return <button {...props}>{title}</button>;
};

export default Button;
