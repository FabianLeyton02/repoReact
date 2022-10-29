import React from "react";
import "./button.css";

function Button(props) {
  return (
    <button
      className={props.color === undefined ? "btn" : `btn ${props.color}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.text}
    </button>
  );
}
export default Button;
