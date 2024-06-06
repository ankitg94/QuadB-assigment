// import { useWheather } from "../Context/Whether"

// const Input = () => {
//     const weather=useWheather()
//     console.log("Wheater data is getting from",weather)
//   return (
//     <>
//     <input
//     placeholder="serch your data here"
//     value={weather.searchCity}
//     onChange={(e)=>weather.setSearchCity(e.target.value)}
//     />  
//     </>
//   )
// }

// export default Input

import { useWheather } from "../Context/Whether"

const Input = () => {
  const weather = useWheather();
  console.log("Weather data is getting from", weather);

  return (
    <input
      placeholder="Search your data here"
      value={weather.searchCity}
      onChange={(e) => weather.setSearchCity(e.target.value)}
      className="mt-4 p-2 w-full border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
    />
  );
}

export default Input;

