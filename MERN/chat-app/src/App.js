import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client'
import React, {useState, useEffect} from "react";
import Chat from "./components/Chat";


function App() {
  const [socket] = useState(() => io(':8000'));

  useEffect(() => {
    console.log('Is this running?');
    socket.on('Welcome', data => console.log(data));
    return () => socket.disconnect(true)
  })

  return (
    <div className="App">
      <h1>Socket Test</h1>
      <Chat/>
    </div>
  );
}

export default App;
