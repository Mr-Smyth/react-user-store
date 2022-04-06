import React from "react";

import butt from './Button.module.css';

const Button = (props) => {
    return <button type="submit" className={`${butt.myButton} ${props.myStyle}`} >{props.children}</button>
}

export default Button;