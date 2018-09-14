import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home1 from "./components/Home.js";
import Forum from "./components/FORUM/Forum.js";
import Tutorial from "./components/TUTORIAL/Tutorial.js";
import Links from "./components/HOME/links.js"

class App extends React.Component{
  render() {
    return(

      <BrowserRouter>
      <div>
        <Links />
        <Switch>
          <Route exact path="/" component={Home1}/>
          <Route  path="/forum" component={Forum}/>
          <Route  path="/tutorial" component={Tutorial}/>
        </Switch>
      </div>
      </BrowserRouter>
    )

  }
}
export default App;
