import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import './App.css'

const App = () => {


  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={RegisterPage} />

      </Switch>
    </Router>
  );
}

export default App;
