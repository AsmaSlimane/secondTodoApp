import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../Redux/TodoSlice";

const TodoItem = ({todoInfo}) => {
    const dispatch = useDispatch()
  return (
    <div className="flex gap-2 items-center ">
        <input type="checkbox" checked= {todoInfo.completed}/>
        <p className="">{todoInfo.task}</p>
        <MdDelete className="text-red-500 cursor-pointer" onClick={()=>{dispatch(deleteTodo(todoInfo.id))}} />
        

    </div>
  )
}

export default TodoItem