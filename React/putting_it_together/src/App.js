import logo from './logo.svg';
import './App.css';
import MyComponent from "./components/MyComponent";


function App() {
  return (
    <div className="App">
            <MyComponent firstName={"Osama"} lastName={"Refae"} age={24} hairColor={"Black"}/>
            <MyComponent firstName={"Smith"} lastName={"John"} age={86} hairColor={"Brown"}/>
            <MyComponent firstName={"Fillmore"} lastName={"Millard"} age={50} hairColor={"Brown"}/>
            <MyComponent firstName={"Smith"} lastName={"Maria"} age={62} hairColor={"Brown"}/>
      <MyComponent></MyComponent>
    </div>
  );
}

export default App;
