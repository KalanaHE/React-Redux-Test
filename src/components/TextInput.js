import React from "react";
import { useDispatch } from "react-redux";
import { textChange } from "../actions";

const TextInput = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        onChange={(e) => dispatch(textChange(e.target.value))}
      />
    </div>
  );
};

export default TextInput;
