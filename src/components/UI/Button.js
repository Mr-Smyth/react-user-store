import React from "react";

import butt from './Button.module.css';

const Button = (props) => {
    return <button type="submit" className={`${butt.myButton} ${props.myStyle}`} >help me button</button>
}

export default Button;