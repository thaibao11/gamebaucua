import { combineReducers } from "redux";
import TodoListReducer from "./TodolistReducer";
import FaceBookReducer from "./FaceBookReducer";
import GameBauCuaReducer from "./GameBauCua";
const rootReducer = combineReducers({
  // stateTodo: TodoListReducer,
  stateDefault: FaceBookReducer,
  stateDice: GameBauCuaReducer,
});

export default rootReducer;
