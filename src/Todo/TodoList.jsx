// import { useSelector } from "react-redux"
// import TodoItem from "./TodoItem";
// import { useState } from "react";

// const TodoList = () => {
//    const [filter,setFilter] =useState('')
    
//    const todos =useSelector((state)=>filter === "All"
//     ?state.todos: state.todos.filter((todo)=>todo.category===filter));

//     return (
//     <>
//     <select value={filter} onChange={(e)=>setFilter(e.target.value)}>
//       <option value="All">All</option>
//       <option value="low">Low</option>
//       <option value="medium">Medium</option>
//       <option value="high">High</option>
//     </select>
//     <ul>
//      {
//         todos.map((todo)=>(
//             <TodoItem key={todo.id} todo={todo}/> 
//         ))
//      }
//     </ul>
   
//     </>
//   )
// }

// export default TodoList


import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = () => {
  const [filter, setFilter] = useState('');

  const todos = useSelector((state) => 
    filter === "All" ? state.todos : state.todos.filter((todo) => todo.category === filter)
  );

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
       <select 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 p-2 w-full border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        <option value="All">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
     
      <ul className="space-y-2">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

