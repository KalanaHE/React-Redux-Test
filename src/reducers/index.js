import { combineReducers } from "redux";

import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import textChangeReducer from "./textchange";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  text: textChangeReducer,
});

export default allReducers;
