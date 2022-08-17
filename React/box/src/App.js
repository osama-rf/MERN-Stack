import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import BoxDisplay from "./components/BoxDisplay";
import BoxForm from "./components/BoxForm";

function App() {

  const [color, setColor] = useState([]);
    const changeColor = ( newColor ) => {
        setColor([ ...color, newColor ]);
    }

    return (
      <div className="body">
        <div className="text-light">
          <BoxForm onNewBox={ changeColor }/>
              <BoxDisplay boxes={[
                {
                  color
                },
            ]}/>
        </div>
      </div>
  );
}

export default App;
