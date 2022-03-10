
const initialState = {
  filters: {
    search: '',
    status: 'All',
    prioriry: []


  },
  todoList: [
    { id: 1, name: "learn Redux", completed: false, prioriry: "MediuM" },
    { id: 2, name: "learn React", completed: true, prioriry: "High" },
    { id: 3, name: "learn javaScirpt", completed: false, prioriry: "Low" }

  ]
}

const rootReducer = (state = initialState, action) => {
 switch (action.type) {
    case 'todoList/addTodo':
      return {
        ...state,
        todoList: [
          ...state.todoList,
          action.payload
        ]
      }
      case 'filters/searchFilterChange':
        return {
          ...state,
          filters: {
            ...state.filters,
            search: action.payload
          }
        
          
        }
    default:
      return state;

  }
}

export default rootReducer;

//link to store