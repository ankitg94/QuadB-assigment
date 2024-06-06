
import { useDispatch, useSelector } from "react-redux"
import Login from "./Pages/Login.jsx"
import Logout from "./Pages/Logout.jsx"
import { checkAuth } from "./Slice/AuthSlice.jsx"
import { useEffect } from "react"
import Home from "./Pages/Home.jsx"

const App = () => {
   const isAuthenticated =useSelector((state)=>state.auth.isAuthetication)
   const dispatch =useDispatch()
   useEffect(()=>{
     dispatch(checkAuth())
   },[dispatch])
  return (
    <>
    <div> 
      {
       isAuthenticated ? (
      <>
      <h1 className="flex justify-center bg-slate-700">Assigment</h1>
      <h1 className="flex justify-center bg-slate-500 ">Wheather api && Todo</h1>
      <Home/>
      <Logout/>
      </>
       ):( 
         <Login/>
       )}
      </div> 
    </>
  )
}

export default App
