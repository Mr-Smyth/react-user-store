import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

// css
import classes from './AddUser.module.css'


const AddUser = (props) => {
  const addUserHandler = (event) => {
      event.preventDefault();
  };
  return (
    <Card myClassName={classes.user}>
      <form className='box'>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="firstname">First name</label>
        <input id="firstname" type="text"></input>
        <label htmlFor="lastname">Last name</label>
        <input id="lastname" type="text"></input>
        <label htmlFor="age">Age (In Years)</label>
        <input id="age" type="number"></input>
        <label htmlFor="email">Email</label>
        <input id="email" type="email"></input>

        <Button myStyles={classes.submit_button}></Button>
      </form>
    </Card>
  );
};

export default AddUser;
