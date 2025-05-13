import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

type ButtonProps = {
  variant: "default" | "icon";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, variant = "default", ...rest }: ButtonProps) => {
  const ClassMap = {
    default: styles.default,
    icon: styles.icon,
  };

  return (
    <button className={classNames(styles.botao, ClassMap[variant])} {...rest}>
      {/* classNames é uma biblioteca que permite adicionar classes dinamicamente */}
      {children}
    </button>
  );
};

export default Button;
