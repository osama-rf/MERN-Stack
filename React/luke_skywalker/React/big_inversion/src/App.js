import logo from './logo.svg';
import './App.css';
import Person from "./components/Person";
import PersonCard from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person firstName={"Osama"} lastName={"Refae"} age={24} hairColor={"Black"}/>
      <Person firstName={"Smith"} lastName={"John"} age={86} hairColor={"Brown"}/>
      <Person firstName={"Fillmore"} lastName={"Millard"} age={50} hairColor={"Brown"}/>
      <Person firstName={"Smith"} lastName={"Maria"} age={62} hairColor={"Brown"}/>
    </div>
  );
}

export default App;
