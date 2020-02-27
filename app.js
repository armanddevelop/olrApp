import React from "react";
import HomePage from "./components/home/HomePage";
import NavBar from "./components/navbar/navbar";
import AboutPage from "./components/about/about";
import PageNotFound from "./components/commons/PageNotFound";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="container-fluid">
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </div>
  );
};

export default App;
