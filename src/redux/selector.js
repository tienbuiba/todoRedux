import { createSelector } from "reselect";


export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritesSelector =(state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;


// export const todoListSelector = (state) => {
//   const searchText = searchTextSelector(state);
//   const todoRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(state.filters.search)
//   })
//   return todoRemaining;
// }

export const todoRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  filterPrioritesSelector,
  (todoList, status, searchText, priorities) => {
    return todoList.filter((todo) => {
      if (status === 'All') {
        return priorities.length ?  todo.name.includes(searchText) &&  priorities.includes(todo.priorities) : todo.name.includes(searchText);
      }
      return todo.name.includes(searchText) &&
        (status === 'Completed'
          ? todo.completed
          : !todo.completed)
    })
  }

)