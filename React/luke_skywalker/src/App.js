import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Form from "./components/Form";
import People from "./components/People";
import Planet from "./components/Planet";


function App() {
  return (
    <BrowserRouter>
      <h1>Luke SkyWalker</h1>
      <Form/>
      <Switch>
        <Route path={"/people/:id"}>
          <People/>
        </Route>

        <Route path={"/planets/:id"}>
          <Planet/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
