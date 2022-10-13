import React from "react";
import "./Button.css";

export const isOperator = (val) => {
  return !isNaN(val) || val === "." || val === "=";
};
const Button = (props) => {
  return (
    <div
      className={`button-wrapper ${
        isOperator(props.children) ? null : "operator"
      }`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Button;
