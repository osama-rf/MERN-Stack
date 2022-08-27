import logo from './logo.svg';
import './App.css';
import React from "react";
import Main from "./views/Main";
import Create from "./views/Create";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Update from "./views/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route exact path={"/author/:_id/edit"}>
            <Update/>
          </Route>

          <Route exact path={"/author/new"}>
            <Create/>
          </Route>

          <Route exact path={"/author/"}>
            <Main/>
          </Route>


        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
