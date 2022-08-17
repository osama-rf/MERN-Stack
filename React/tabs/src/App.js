import logo from './logo.svg';

import './App.css';
import Tabs from "./components/Tabs";
import {useState} from "react";

function App() {
    const [tab, setTab] = useState({
        content: ["Whoa look at me! I'm a TAB", "WHAT!? I HAVE TWO TABS", "Three is too good to be true"],
        selectedTab: 0,
    })
  return (
      <div className="App">
          <h1>TABS</h1>
          <Tabs tab={tab} setTab={setTab} />
      </div>
  );
}

export default App;