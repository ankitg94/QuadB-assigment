// import { useState } from "react"
// import { useDispatch } from "react-redux"
// import { login } from "../Slice/AuthSlice"

// const Login = () => {
//    const dispatch=useDispatch()
//    const [username,setUserName]=useState('')
//    const [password,setPassword]=useState('')
//    const handleSubmit=(e)=>{
//        e.preventDefault()
//        if(username==="ashu" && password==="1234"){
//         dispatch(login()) 
//         console.log("login Succesfully")
//        }
//        else{
//         console.log("user or password  is wrong")
//        }
//    }
//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//         <input 
//         type="text"
//         placeholder="usename"
//         value={username}
//         onChange={(e)=>setUserName(e.target.value)}
//         />        
//         <input
//         type="password"
//         placeholder="password"
//         value={password}
//         onChange={(e)=>setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//     </form>
//     <h1>username="ashu",password="1234"</h1>
//     </>
//   )
// }
// export default Login



import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Slice/AuthSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "ashu" && password === "1234") {
      dispatch(login());
      console.log("Login successfully");
    } else {
      console.log("Username or password is wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded shadow-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">Username: "ashu", Password: "1234"</p>
      </div>
    </div>
  );
};

export default Login;

