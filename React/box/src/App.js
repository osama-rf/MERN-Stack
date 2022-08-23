import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import BoxDisplay from "./components/BoxDisplay";
import BoxForm from "./components/BoxForm";

function App() {
    const [pastColor, setPastColor] = useState([])
    const box = (newColor) => {
        setPastColor([...pastColor,newColor])
    }
    return(
        <div className="App">
            <BoxForm onNewColor={box}/>
            <BoxDisplay colorList={pastColor} className="box"/>
        </div>
    )
}

export default App;
