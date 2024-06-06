import { createSlice,nanoid } from "@reduxjs/toolkit";


const todoSlice = createSlice({
      name:"todos",
      initialState:[],
      reducers:{
        //add todo 
        addTodo:(state,action)=>{
           state.push({
            id:nanoid(),
            text:action.payload.text,
            category:action.payload.category,
            
          })
        },
        //all todo
        allTodo:(state,action)=>{
            const todo = state.find((todo)=>todo.id===action.payload)
            if(todo){
                console.log("todo",todo)
            }
        },
        //deleted todo
        deleteTodo:(state,action)=>{
          return ( 
            state.filter((todo)=>todo.id !== action.payload)
        
            )}
      }

})
export const {addTodo,deleteTodo,allTodo} = todoSlice.actions
export default todoSlice.reducer

