import React from "react";

// get the classes from the css module file
import classes from "./Card.module.css";

const Card = (props) => {
    // So we inject both the module which styles the card (Card.module - classes.card)
    // But also we accept what is passed in via props - the props come here from AddUser.js
  return <div className={`${classes.card} ${props.myClassName}`}>{props.children}</div>;
};

export default Card;
