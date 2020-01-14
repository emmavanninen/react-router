import React, { Component } from "react";
//! as Poop to rename
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";
import AboutMe from "./components/AboutMe";

export default class App extends Component {
  render() {
    return (
      //! Old version of BrowserRouter: HashBrowser
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/about-me">About me</Link>
            </li>
          </ul>
        </div>
        

        {/* //! with Switch statement only one thing is true */}
        <Switch>
          {/* //! exact to prevent showing everything with '/'' */}
          <Route path="/" exact component={Home} />
          <Route path="/users" exact component={Users} />
          //! ':id' is a slug or dynamic
          <Route path="/users/:id" exact component={User} />
          <Route path="/about-me" exact component={AboutMe} />

          {/* //! If nothing else, show Not Found */}
          <Route exact path="" render={() => <h1>Not Found</h1>} />
        </Switch>
      </Router>
    );
  }
}
