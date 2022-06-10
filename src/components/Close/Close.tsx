import React, { Dispatch, FC, SetStateAction } from "react";
import styles from "./close.module.scss";

interface ICloseProps {
  setShow: Dispatch<SetStateAction<boolean>>;
}

const Close: FC<ICloseProps> = ({ setShow }) => {
  return (
    <button
      onClick={() => setShow((prevState) => !prevState)}
      className={styles.close}
    />
  );
};

export default Close;
