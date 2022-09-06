import logo from './logo.svg';
import './App.css';
import CreatePet from "./components/PetForm";
import PetDash from "./components/PetDash";
import PetDetails from "./components/PetDetails";

function App() {
  return (
    <div className="App">
        <PetDetails/>
        {/*<CreatePet/>*/}
    </div>
  );
}

export default App;
