import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import ControlButtons from "./components/ControlButtons";
import TextInput from "./components/TextInput";
import TextView from "./components/TextView";

function App() {
  const count = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);

  let apidata = useSelector((state) => state.fetchapi);
  apidata = JSON.stringify(apidata);
  // console.log(apidata.results);
  return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        {isLogged ? (
          <h3>{apidata}</h3>
        ) : (
          <h3>Content Hidden! Please Login to see</h3>
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
