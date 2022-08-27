import logo from './logo.svg';
import React from "react";
import './App.css';
import Main from "./views/Main";
import Details from "./views/Details";
import Update from "./views/Update";
import {BrowserRouter, Route, Switch} from "react-router-dom";


function App() {
  return (
        <div className="App">
            <BrowserRouter>
                <Switch>

                    <Route exact path="/product/:_id/edit">
                        <Update/>
                    </Route>


                    <Route exact path="/product/:_id" >
                        <Details/>
                    </Route>

                    <Route exact path="/product/">
                        <Main/>
                    </Route>


                </Switch>
            </BrowserRouter>
        </div>
  );
}

export default App;
