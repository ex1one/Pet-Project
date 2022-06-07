import React, { forwardRef, InputHTMLAttributes } from "react";
import styles from "./input.module.scss";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder?: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ type, placeholder, ...props }, ref) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        ref={ref}
        className={styles.input}
        {...props}
      />
    );
  },
);

// const Input: FC<IInputProps> = ({ type, placeholder, ...props }) => {
//   return (
//     <input
//       type={type}
//       placeholder={placeholder}
//       className={styles.input}
//       {...props}
//     />
//   );
// };

export default Input;
