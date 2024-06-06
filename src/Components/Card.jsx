import  { useEffect, useState } from 'react'
import { useWheather } from '../Context/Whether'

const Card = () => {
    const [weatherdata,setWeatherData]=useState(0)
    const weather=useWheather()
    useEffect(()=>{    
    const data =weather.data?.current?.temp_c 
    if(data){
       setWeatherData(data)
    }    
},[weather.data])
  return (
    <>
      <h2>{weather.data?.current?.temp_c}&deg;C</h2>
      <h2>{weather.data?.location.name}</h2>
      {weatherdata>30?(<h2>you may not go outside</h2>
       ):(<h2>you will have to go </h2>)}

    </>
  )
}

export default Card
