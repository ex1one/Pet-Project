import React, { Dispatch, FC, ReactNode, SetStateAction } from "react";
import styles from "./modal.module.scss";
import Close from "../Close/Close";

interface IModalProps {
  children: ReactNode;
  setShow: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<IModalProps> = ({ children, setShow }) => {
  return (
    <div className={styles.modal}>
      <Close setShow={setShow} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Modal;
