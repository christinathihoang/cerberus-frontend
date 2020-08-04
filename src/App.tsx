import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import { Wrapper } from "./styledComponents";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import NicknameForm from "./components/NicknameForm";

function App() {
  return (
    // <div className="columns">
    //   <div className="column is-one-fifth">
    //     {/* <Menu /> */}
    //   </div>
    //   <div className="column">
        <Router>
          <Switch>
            <Route path="/nickname-form" component={NicknameForm} />
          </Switch>
        </Router>
    //   </div>
    // </div>
  );
}

export default App;
