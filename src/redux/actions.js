
  const addTodo=(data)=> {
  return {
    type:'todoList/addTodo',
    payload: data
  }
}
export default addTodo;

 export const toggleTodoStatus=(todoId)=> {
  return {
    type:'todoList/toggleTodoStatus',
    payload: todoId

  }
}


export const searchFilterChange= (text)=> {
  return {
    type:  'filters/searchFilterChange',
    payload: text
    //noi dung dang nhap ben phia  ui
  }
}

export const statusFilterChange =(status)=> {
  return {
    type: 'filters/statusFilterChange',
    payload: status,
  }

}

export const priorityFilterChange =(priorities)=> {
  return {
    type: 'filters/priorityFilterChange',
    payload: priorities,
  }
}

//action creaters => function

// step -> action >reducer>