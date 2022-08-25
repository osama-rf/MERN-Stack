import logo from './logo.svg';
import './App.css';
import MessageForm from "./components/MyBox";
import MessageDisplay from "./components/MyBox2";
import {useState} from "react";

function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no message!");

  const youveGotMail = (newMessage) => {
      setCurrentMsg(newMessage)
  }
  return (
    <>
      <MessageForm onNewMessage={youveGotMail}/>
      <MessageDisplay message={currentMsg} />
    </>
  );
}

export default App;
