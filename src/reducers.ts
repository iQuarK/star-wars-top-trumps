import { combineReducers } from "redux";
import { players } from "./reducers/players.reducer";
import { people } from "./reducers/people.reducer";

const rootReducer = combineReducers({
  players,
  people
});

export default rootReducer;
