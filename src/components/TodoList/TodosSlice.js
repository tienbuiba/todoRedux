const initialState = [
  { id: 1, name: "learn Redux", completed: false, priorities: "Medium" },
  { id: 2, name: "learn React", completed: true, priorities: "High" },
  { id: 3, name: "learn javaScirpt", completed: false, priorities: "Low" }


]
const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todoList/addTodo':
      return [
        ...state,
        action.payload
      ]
      case 'todoList/toggleTodoStatus':
        return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
    default:
      return state;

  }
}

export default todoListReducer;

//link to store