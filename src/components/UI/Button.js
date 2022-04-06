import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      // Set the button to be the type of what is required at the button
      type={props.type || 'button'}
      // we want the button using this to handle the click as they req
      onClick={props.onClick}
      // classname will be both the default styles, with overiding from the styles applied to the button being used.
      className={`${classes.button} ${props.myClassName}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
