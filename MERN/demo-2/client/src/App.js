import Main from './views/Main'
import Details from './views/Details'
import Update from './views/Update'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
        <Route path="/users">
          <Main />
        </Route>
        <Route path="/user/:id">
          <Details />
        </Route>
        <Route path="/edit/:id">
          <Update />
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
