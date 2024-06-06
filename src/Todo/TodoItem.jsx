// import { useDispatch } from "react-redux"
// import { allTodo, deleteTodo } from "../Slice/slice"


// const TodoItem = ({todo}) => {
// const dispatch=useDispatch()

//   return (
//     <>
//     <li> 
//      <span onClick={()=>dispatch(allTodo(todo.id))}>
//       {todo.text}-{todo.category}</span>
//       <button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
//      </li>   
//     </>
//   )
// }

// export default TodoItem


import { useDispatch } from "react-redux";
import { allTodo, deleteTodo } from "../Slice/slice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex items-center justify-between p-4 bg-white rounded shadow-md mb-2">
      <span 
        onClick={() => dispatch(allTodo(todo.id))} 
        className="cursor-pointer hover:text-blue-500"
      >
        {todo.text} - {todo.category}
      </span>
      <button 
        onClick={() => dispatch(deleteTodo(todo.id))} 
        className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
