import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import { Wrapper } from "./styledComponents";

function App() {
  return (

    <div className="columns">
      <div className="column is-one-quarter">
        <Menu />
      </div>
      <div className="column has-background-grey-dark"></div>

    </div>
  );
}

export default App;
