import logo from './logo.svg';

import './App.css';
import Tabs from "./components/Tabs";
import {useState} from "react";

function App() {
    const [tab, setTab] = useState({
        content: ["Tab 1 content is showing here.", "Tab 2 content is showing here.", "Tab 3 content is showing here."],
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