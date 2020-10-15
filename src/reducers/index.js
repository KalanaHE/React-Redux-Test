import { combineReducers } from "redux";

import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import textChangeReducer from "./textchange";
import fetchapi from "./api";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  text: textChangeReducer,
  fetchapi: fetchapi,
});

export default allReducers;
