import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import MainPage from "./pages/MainPage";
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;