import { useDispatch } from "react-redux"
import { logout } from "../Slice/AuthSlice"



const Logout = () => {
    const dispatch =useDispatch()
    const handleLogout=()=>{
        dispatch(logout())
        console.log("logoutsuccesfully")
    }
  return (
    <>
      <button onClick={handleLogout}>Logout button</button>
    </>
  )
}

export default Logout
