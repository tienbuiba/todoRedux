

import { combineReducers } from "redux";
import filtersReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/TodoList/TodosSlice";





// no use combineReducer
// const rootReducer = (state = {}, action) => {
// return {
//   todoList: todoListReducer(state.todoList, action),
//   filters: filtersReducer(state.filters, action)
// }
// }


//use combineReducer
const rootReducer = combineReducers({ 
    filters: filtersReducer, 
    todoList: todoListReducer,
  });

export default rootReducer;

//link to store