import "./scss/app.scss"
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes as Switch, Route } from "react-router-dom";

// Custom Components
import HomePage from "./components/home-page";

const bp = "/Crokinole"

function App(props) {
  // props.state = {}

  return (
    <Router className="App">
      
      <div className="title">Crokinole</div>
      <Switch>
        <Route path={bp} element={<HomePage />}/>
        <Route path={bp+"/test"}/>
        <Route path={bp+"/test"} element={<div>test</div>}/>


      </Switch>
    </Router>
  );
}

export default App;
