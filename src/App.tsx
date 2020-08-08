import React from "react";
import "./App.css";
import "bulma/css/bulma.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import NicknameForm from "./routes/NicknameForm";
import Littles from "./routes/Littles";
import Profile from "./routes/Profile";
import Contact from "./routes/Contact";
import Footer from "./components/Footer";
import Dashboard from "./routes/Dashboard";
import Directory from "./routes/Directory";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="container is-fluid mt-6">
        <Header/>
        <div className="columns">
          <div className="column is-one-fifth">
            <Menu />
          </div>
          <div className="column">
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/nickname-form" component={NicknameForm} />
              <Route path="/littles" component={Littles} />
              <Route path="/profile" component={Profile} />
              <Route path="/contact" component={Contact} />
              <Route path="/directory" component={Directory} />
            </Switch>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
