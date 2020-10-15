import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import ControlButtons from "./components/ControlButtons";
import TextInput from "./components/TextInput";
import TextView from "./components/TextView";

function App() {
  const count = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const apidata = useSelector((state) => state);
  console.log(apidata);
  return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        {isLogged ? (
          <h3>Valuable information that unregistered users shouldn't see</h3>
        ) : (
          <h3>Hidden content!</h3>
        )}
        <br />
        <ControlButtons />
        <br />
        <TextView />
        <br />
        <TextInput />
      </header>
    </div>
  );
}

export default App;
