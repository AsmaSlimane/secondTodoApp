import { useSelector } from "react-redux"
import TodoItem from "./TodoItem"
import AddTodo from "./AddTodo"


const TodoList = () => {
  const {myTodos}= useSelector((state)=> state.TodoReducer)

  return (
    <div>
      <AddTodo/>
      {myTodos.map((el)=> <TodoItem todoInfo={el} key={el.id}/>)}
    </div>
  )
}

export default TodoList