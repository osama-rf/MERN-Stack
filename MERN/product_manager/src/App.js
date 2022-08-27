import logo from './logo.svg';
import React from "react";
import './App.css';
import Main from "./views/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Details from "./views/Details";


function App() {
  return (
        <div className="App">
    <BrowserRouter>
            <Routes>
            <Route path="/product/" element={<Main/>}>
            </Route>
            <Route path="product/:_id" element={<Details/>}>
            </Route>
            </Routes>
    </BrowserRouter>
        </div>
  );
}

export default App;
