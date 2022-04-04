import React from "react";

import Card from "../UI/Card";

// css
import './AddUser.css';

const AddUser = (props) => {
  const addUserHandler = (event) => {
      event.preventDefault();
  };
  return (
    <Card className='container'>
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

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default AddUser;
