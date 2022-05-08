import "./scss/app.scss"

import React from "react";
import { 
  Routes as Switch, 
  BrowserRouter as Router, 
  Route 
} from "react-router-dom";

// Custom Components
import HomePage from "./components/home-page";
import Navbar from './components/navbar';
import LoginPage from "./components/login-page";

const bp = "/Crokinole"

function App(props) {
  // props.state = {}

  return (
    <Router className="App">
      <div id="Vars" hidden={true}></div>
      <Navbar />
      <div className="title">Crokinole</div>
      <Switch>
        <Route path={bp} element={<HomePage />} />
        <Route path={bp+"/Login"} element={<LoginPage/>} />
        <Route path={bp+"/test"} element={<div>test</div>} />


      </Switch>
    </Router>
  );
}

export default App;
