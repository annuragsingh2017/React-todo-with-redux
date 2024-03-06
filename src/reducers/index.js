import { combineReducers } from "redux";
import todoReducers from "./todo-reducer";

const rootReducer = combineReducers({
  todos: todoReducers,
});

export default rootReducer;
