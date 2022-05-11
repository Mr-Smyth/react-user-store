import React from "react";

import Card from "../UI/Card";

import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card myClassName={classes.users}>
      {props.users.map((user) => (
        <ul key={user.id}>
          <li>Username : {user.username}</li>
          <li>Age : {user.age}</li>
          <li>email : {user.email}</li>
        </ul>
      ))}
    </Card>
  );
};

export default UsersList;
