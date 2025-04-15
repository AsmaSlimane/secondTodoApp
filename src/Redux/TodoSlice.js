import { createSlice } from "@reduxjs/toolkit";
import todos from "../data";

const todoSlice = createSlice({
    name: "Todo",
    initialState: {myTodos: todos},
    reducers: {
        deleteTodo: (state, action)=>{
            state.myTodos= state.myTodos.filter((el)=> el.id!= action.payload)
        },
        AddingTodo: (state, action)=>{
            state.myTodos= [...state.myTodos, action.payload]
        },
        UpdatingTodo: (state, action)=>{
            state.myTodos= state.myTodos.map((el)=>el.id == action.payload.id? {...el, task: action.payload.newTask}: el)
        }
    }


    }
);

export default todoSlice.reducer;
export const {deleteTodo, AddingTodo, UpdatingTodo}= todoSlice.actions;