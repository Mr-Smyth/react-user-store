import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

// css
import classes from './AddUser.module.css'


const AddUser = (props) => {

  // initialise useState - each time this code is run returns an array with 2 elements
  // we store them here
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');

  // Our Add user from form handler
  const addUserHandler = (event) => {
      event.preventDefault();
      // console out the changed value
      console.log(enteredUsername, enteredAge, enteredEmail);
  };

  // Our State handler for Username
  const changeUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  // Our State handler for Age
  const changeAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  // Our State handler for email
  const changeEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  


  return (
    <Card myClassName={classes.user}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={changeUsernameHandler}></input>
        <label htmlFor="age">Age (In Years)</label>
        <input id="age" type="number" onChange={changeAgeHandler}></input>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" onChange={changeEmailHandler}></input>

        <Button type="submit" >Submit this</Button>
      </form>
    </Card>
  );
};

export default AddUser;
