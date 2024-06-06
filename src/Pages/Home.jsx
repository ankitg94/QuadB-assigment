// import { useEffect } from "react"
// import Button from "../Components/Button"
// import Card from "../Components/Card"
// import Input from "../Components/Input"
//  import { useWheather } from "../Context/Whether"
// import Layout from "../Components/Layout"

// import CreateTodo from "../Todo/CreateTodo"
// import TodoList from "../Todo/TodoList"

// const Home = () => {
//     const  weather=useWheather()
//   // const weather =useWheather()
//    console.log(weather)
//    useEffect(()=>{
//       weather.getLocationData()
//    },[])
//   return (
//     <>
//       <Layout>
//       <div className="flex flex-col">  
//       {/*left*/}
//       <div className="bg-green-400 h-full-screen w-full" > 
//       <Input/>
//       <Button onClick={weather.fetchData} value="search"/>
//       <Card/>
//       <Button onClick={()=>window.location.reload()} value="Refresh"/> 
//       </div>
//       {/*right*/}
//       <div className="bg-red-400 h-full-screen w-full">
//         <CreateTodo/>
//         <TodoList/>
//       </div>
//       </div>
//       </Layout>
//     </>
//   )
// }

// export default Home

import { useEffect } from "react";
import Button from "../Components/Button";
import Card from "../Components/Card";
import Input from "../Components/Input";
import { useWheather } from "../Context/Whether";
import Layout from "../Components/Layout";

import CreateTodo from "../Todo/CreateTodo";
import TodoList from "../Todo/TodoList";

const Home = () => {
  const weather = useWheather();
  
  useEffect(() => {
    weather.getLocationData();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-4 p-4">
        {/* Left Section */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-full md:w-1/2">
          <Input />
          <Button onClick={weather.fetchData} value="Search" />
          <Card />
          <Button onClick={() => window.location.reload()} value="Refresh" />
        </div>
        {/* Right Section */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg w-full md:w-1/2">
          <CreateTodo />
          <TodoList />
        </div>
      </div>
    </Layout>
  );
};

export default Home;

