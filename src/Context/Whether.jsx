import { createContext, useContext, useState } from "react";
import { GetWheatherDataCity, GetWheatherLocation } from "../Api/index.jsx";
//1-CreateContext 
const Wheathercontext = createContext(null)
//2-useContext callback
export const useWheather = () => {
    return useContext(Wheathercontext);
}

//3 - useContext provider 
export const WheatherProvider = (props)=>{
  const [data,setData] = useState(null)
  const [searchCity,setSearchCity] = useState(null)
  
      //fetch data
       const fetchData =async()=>{
       const response = await GetWheatherDataCity(searchCity)
       setData(response)
  } 
  //get data location 
            const getLocationData =()=>{ 
            navigator.geolocation.getCurrentPosition((position)=>{
            GetWheatherLocation(
            position.coords.latitude,
            position.coords.longitude
        ).then((data)=>setData(data))
    })
  } 
    return (
        <Wheathercontext.Provider value={{
              data,
              searchCity,
              fetchData,
              setSearchCity,
              getLocationData

        }}>
            {props.children}
        </Wheathercontext.Provider>
    )
}



















