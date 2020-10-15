import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, toggleLogin, requestAPIData } from "../actions";

const ControlButtons = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increase</button> -{" "}
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <br />
      <button onClick={() => dispatch(toggleLogin())}>
        Toggle Login/Logout
      </button>
      <br />
      <button onClick={() => dispatch(requestAPIData())}>Fetch</button>
    </div>
  );
};

export default ControlButtons;
