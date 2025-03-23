import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const[userData,setUserData]=useState({
      email:"Marry Doe",
      password:"Marry Doe",
   
    })
    const navigate=useNavigate()
  return (
    <div className="h-150 w-80 p-5 flex flex-col justify-start rounded-xl bg-white relative">
      <h1 className="text-xl font-bold">Create your<br></br> PopX account</h1>
      <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, animi!</p>

      <form className="mt-5 flex flex-col gap-5">
        <div className=" h-10 relative rounded-md border-2 border-gray-300">
          <span className=" absolute bottom-8 left-2 bg-white pl-2 pr-2 text-[10px] text-purple-600">Email address <b className="text-red-500">*</b></span>
          <input defaultValue={userData.email} className=" h-full w-full pl-4 bg-white outline-none text-md rounded-md "></input>
        </div>

        <div className=" h-10 relative rounded-md border-2 border-gray-300">
          <span className=" absolute bottom-8 left-2 bg-white pl-2 pr-2 text-[10px] text-purple-600">password <b className="text-red-500">*</b></span>
          <input defaultValue={userData.password} className=" h-full w-full pl-4 bg-white outline-none text-md rounded-md "></input>
        </div>

        <button onClick={(e)=>{
            e.preventDefault()
            navigate("/profile")
          
          }}  className=" mt-auto h-10 bg-gray-300 rounded-md text-white">Login</button>
      </form>

    </div>
  )
}
export default Login