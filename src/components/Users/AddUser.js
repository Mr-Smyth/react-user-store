import React from "react";

const AddUser = (props) => {
  const addUserHandler = (event) => {
      event.preventDefault();
    return (
      <div>
        <h1>You submitted a form!</h1>
      </div>
    );
  };
  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age (In Years)</label>
        <input id="age" type="number"></input>
        <label htmlFor="email">Email</label>
        <input id="email" type="email"></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
