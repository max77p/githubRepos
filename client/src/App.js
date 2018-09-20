import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

class App extends Component {


  render() {
    return (
      <Router>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />

          </Switch>

      </Router>
    );
  }
}

export default App;