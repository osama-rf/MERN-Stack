import logo from './logo.svg';
import './App.css';
import PirateForm from "./components/PirateForm";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PirateDash from "./components/PirateDash";
import PirateDetails from "./components/PirateDetails";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>

                <Route exact path={"/pirate/new"}>
                    <PirateForm/>
                </Route>

                <Route exact path={"/pirate/:_id"}>
                    <PirateDetails/>
                </Route>

                <Route exact path={"/pirate"}>
                    <PirateDash/>
                </Route>

            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
