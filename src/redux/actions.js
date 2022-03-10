

  const addTodo=(data)=> {
  return {
    type:'todoList/addTodo',
    payload: data
  }
}
export default addTodo;

export const searchFilterChange= (text)=> {
  return {
    type:  'filters/searchFilterChange',
    payload: text
    //noi dung dang nhap ben phia  ui
  }
}
//action creaters => function