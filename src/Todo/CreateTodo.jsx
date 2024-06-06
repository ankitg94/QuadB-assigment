// import { useState } from "react"
// import { addTodo } from "../Slice/slice"
// import { useDispatch } from 'react-redux';
// const CreateTodo = () => {
//   const dispatch =useDispatch()


//   const[text,setText]=useState('')
//   const[category,setCategory]=useState('low')
//   const HandleSubmit =(e)=>{
//      e.preventDefault()

//      dispatch(addTodo({text,category}))
//     setText('')
//     setCategory('low')
// }
//   return (
//     <>
//     <form onSubmit={HandleSubmit}>
//    <input
//       placeholder="add your todo"
//       value={text}
//       onChange={(e)=>setText(e.target.value)}
//       />
//       <select 
//       value={category}
//       onChange={(e)=>setCategory(e.target.value)}
//       >
//         <option value="low">Low</option>
//         <option value="medium">Medium</option>
//         <option value="high">High</option>
//       </select>
//     <button type="submit">addTodo</button>

//     </form>
//     </>
//   )
// }
// export default CreateTodo

import { useState } from "react";
import { addTodo } from "../Slice/slice";
import { useDispatch } from 'react-redux';

const CreateTodo = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState('');
  const [category, setCategory] = useState('low');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ text, category }));
    setText('');
    setCategory('low');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow-md">
      <input
        type="text"
        placeholder="Add your todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Add Todo
      </button>
    </form>
  );
};

export default CreateTodo;
