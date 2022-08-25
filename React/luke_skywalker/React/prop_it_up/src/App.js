
import './App.css';
import MyNewComponent from "./components/MyNewComponent";

function App() {
  return (
    <div className="App">
      <MyNewComponent firstName={"Osama"} lastName={"Refae"} age={24} hairColor={"Black"}/>
        <MyNewComponent firstName={"Smith"} lastName={"John"} age={86} hairColor={"Brown"}/>
        <MyNewComponent firstName={"Fillmore"} lastName={"Millard"} age={50} hairColor={"Brown"}/>
        <MyNewComponent firstName={"Smith"} lastName={"Maria"} age={62} hairColor={"Brown"}/>

    </div>
  );
}

export default App;
