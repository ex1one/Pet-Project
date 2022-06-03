import React, { FC, ReactNode } from "react";
import styles from "./modal.module.scss";
import Close from "../Close/Close";

interface IModalProps {
  children: ReactNode;
  title?: string;
}

const Modal: FC<IModalProps> = ({ children, title }) => {
  return (
    <div className={styles.modal}>
      <Close />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Modal;
