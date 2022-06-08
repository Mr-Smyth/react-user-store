import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

// css
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  // initialise useState - each time this code is run returns an array with 2 elements
  // we store them here
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [error, setError] = useState();

  // Handle form display
  const [showForm, setShowForm] = useState(false);

  // Our Add user from form handler
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length <= 2) {
      setError({
        title: 'Invalid name',
        message: 'Please enter a valid name'
      })
      return;
    } else if (+enteredAge < 18) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age'
      })
      return;
    }
    props.onAddUser(enteredUsername, enteredAge, enteredEmail);
    clearForm();
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

  // just clears the form when asked
  const clearForm = () => {
    setEnteredUsername("");
    setEnteredAge("");
    setEnteredEmail("");
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} />}
      <Card myClassName={classes.user}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={changeUsernameHandler}
          ></input>
          <label htmlFor="age">Age (In Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={changeAgeHandler}
          ></input>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={enteredEmail}
            onChange={changeEmailHandler}
          ></input>

          <Button type="submit">Submit this</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
