import { useState } from "react"
import { useDispatch } from "react-redux";
import { AddingTodo } from "../Redux/TodoSlice";


const AddTodo = () => {
    const [newTodo, setNewTodo]= useState("");
    const dispatch = useDispatch();
    const addingHandler= (e)=>{
        e.preventDefault();
        dispatch(AddingTodo({id:Math.random(), task:newTodo, completed: false}))
        setNewTodo("")
    }

  return (
    <div className="flex mt-2 ml-4 mb-4 gap-2">
        <input type="text" className="border-2 border-black" onChange={(e)=> {setNewTodo(e.target.value)}} value={newTodo}/>
        <button className="border-2" onClick={addingHandler}>Add</button>
    </div>
  )
}

export default AddTodo