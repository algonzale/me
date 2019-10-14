import React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";

import Home from './Pages/Home';
import Projects from './Pages/Projects';

import Navbar from "./Components/Navigation/Navbar";
import { Icon } from "antd";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
