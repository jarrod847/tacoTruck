import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Components/homepage/homepage";
import NavBar from "./Components/nav/navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchMenu from "./Components/Menu/searchMenu";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/menu" component={SearchMenu} />
      </Router>
    </div>
  );
}

export default App;
