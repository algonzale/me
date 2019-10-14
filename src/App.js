import React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";

import Home from './Pages/Home';
import Projects from './Pages/Projects';

import Navbar from "./Components/Navigation/Navbar";
import { Icon } from "antd";
import "./App.css";

function App() {
  let routes = (
    <Switch>
      <Route path='/projects' exact render={() => (<Projects />)}/>
      <Route path='/' exact render={() => (<Home />)}/>
    </Switch>
  )
  return (
    <div className="App">
      <Navbar />
      {routes}
    </div>
  );
}

export default App;
