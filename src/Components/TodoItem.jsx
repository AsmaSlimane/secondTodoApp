import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo, UpdatingTodo } from "../Redux/TodoSlice";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { Link } from "react-router-dom";


const TodoItem = ({todoInfo}) => {
    const dispatch = useDispatch()

    const [edited, setEdited]= useState(false);
    const [updateTodo, setUpdateTodo]= useState(todoInfo.task);
    const updatingHandler = ()=> {
      dispatch(UpdatingTodo({id: todoInfo.id, newTask: updateTodo}));
      setEdited(false);
    }
  return (
    <div className="flex gap-2 items-center ">
        <input type="checkbox" checked= {todoInfo.completed}/>
        {edited? <input type="text" defaultValue={todoInfo.task} className="border-2 border-yellow-600" onChange={(e)=> {setUpdateTodo(e.target.value)}}/>: <p>{todoInfo.task}</p>}
        
        {!edited && <FaEdit className="text-yellow-600 cursor-pointer" onClick={()=>{setEdited(!edited)}}/>}
        {edited && <MdCancel className="text-red-500 cursor-pointer" onClick={()=>{setEdited(false)}}/>}
        {edited && <GiConfirmed className="text-green-500 cursor-pointer" onClick={updatingHandler}/>}
        <MdDelete className="text-red-500 cursor-pointer" onClick={()=>{dispatch(deleteTodo(todoInfo.id))}} />
          <Link to={`todo/${todoInfo.id}`} >
          <button className="border-2 border-black">Check details</button>
          </Link>
        
        

    </div>
  )
}

export default TodoItem