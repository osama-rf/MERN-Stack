import logo from './logo.svg';
import './App.css';
import React from "react";
import {useParams} from "react-router-dom";
import Welcome from "./components/Welcome";
import Param from "./components/param";
import {
  BrowserRouter,
    Link,
    Switch,
    Route
} from "react-router-dom";



function App() {
  return (
      <BrowserRouter>
          <Link to={"/"}></Link>
          <Switch>
              <Route path={"/welcome"}>
                  <Welcome />
              </Route>
              <Route path={"/:colors/:backgrounds/:param"}>
                  <Param/>
              </Route>
              <Route path={"/:param"}>
                  <Param/>
              </Route>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
