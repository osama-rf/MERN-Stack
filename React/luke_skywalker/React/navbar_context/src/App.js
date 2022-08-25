import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import FormWrapper from "./components/FormWrapper";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
        <Wrapper>
            <Navbar/>
            <FormWrapper/>
        </Wrapper>
    </div>
  );
}

export default App;
