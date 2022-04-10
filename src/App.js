import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  // as we need access to both add and list users components - we lift the state to
  // here as we can access both from here. We can then update the list data
  const [usersList, setUsersList] = useState([]);

  // Once the onAddUser has been triggered it calls this handler which sets the
  // Users list object
  const onAddUserHandler = (uName, uAge, uEmail) => {
    // here we need to get the old list and append a new element to it
    // so this state update relies on the previous state
    // so we add in a function which returns prev state
    setUsersList((prevUserList) => {
      // return an array with previous objects, and add the latest one onto the end
      return [...prevUserList, { username: uName, age: uAge, email: uEmail }];
    });
  };

  return (
    <div>
      {/* Add in our own onAdduser handler to  */}
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
