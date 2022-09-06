import logo from './logo.svg';
import './App.css';
import PetDash from "./components/PetDash";
import PetForm from "./components/PetForm";
import PetDetails from "./components/PetDetails";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PetEdit from "./components/PetEdit";

function App() {
  return (
    <div className="App">
        <div className="App">
            <BrowserRouter>
                <Switch>

                    {/*<Route exact path="/pet/new">*/}
                    {/*    <PetForm/>*/}
                    {/*</Route>*/}

                    {/*<Route exact path="/pet/:_id" >*/}
                    {/*    */}
                    {/*</Route>*/}
                    <PetDetails/>

                    {/*<Route exact path="/pet/edit/:_id" >*/}
                    {/*    <PetEdit/>*/}
                    {/*</Route>*/}


                    {/*<Route exact path="/pet/">*/}
                    {/*    <PetDash/>*/}
                    {/*</Route>*/}

                </Switch>
            </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
