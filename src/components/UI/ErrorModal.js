import React from "react";

import Card from "./Card";

const ErrorModal = () => {
  return (
    <Card>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p></p>
      </div>
      <footer>
        <button>Ok</button>
      </footer>
    </Card>
  );
};

export default ErrorModal;
