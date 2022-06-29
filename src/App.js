import React, { component } from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import About from "./About";
import Exercises from "./Exercises";
import Home from "./Home";
import Register from "./Register";
import Register1 from "./Register1";
import Register2 from "./Register2";
import Register3 from "./Register3";
import FinalSubmission from "./FinalSubmission";
import NavigationBar from "./components/NavigationBar";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/register1">
            <Register1 />
          </Route>
          <Route path="/register2">
            <Register2 />
          </Route>
          <Route path="/register3">
            <Register3 />
          </Route>
          <Route path="/exercises">
            <Exercises />
          </Route>
          <Route path="/finalsubmission">
            <FinalSubmission />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
