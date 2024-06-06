const baseURL = "https://api.weatherapi.com/v1/current.json?key=6bc518c6fc9e4026a1c41524241605";
//get wheather data 
export const GetWheatherDataCity=async(city,res)=>{
    try{
    const response =await fetch(`${baseURL}&q=${city}&aqi=yes`)
    const data = response.json()
    return data
    }catch(error){
        return res.status(400).send({
            success:'false',
            message:"Something went wrong"
        })
    }
}
export const GetWheatherLocation = async(lat,lon)=>{
    try{
        const response =await  fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
        const data =response.json() 
        return data;

    }catch(error){
        console.log(error)
    }
}
