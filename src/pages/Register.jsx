import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {

  const[userData,setUserData]=useState({
    fullname:"Marry Doe",
    phoneNumber:1234567890,
    email:"Marry Doe",
    password:"Marry Doe",
    companyName:"Marry Doe",
    agency:true
  })

  const navigate=useNavigate()
  return (
    <div className="h-150 w-80 p-5 flex flex-col justify-start rounded-xl bg-white relative">

      <section className=" flex flex-col gap-5 h-full ">
        <h1 className="text-xl font-bold">Create your<br></br> PopX account</h1>

        <form className=" h-full p-2 flex flex-col gap-5 relative">

          <div className=" h-10 relative rounded-md border-2 border-gray-300">
            <span className=" absolute bottom-8 left-2 bg-white pl-2 pr-2 text-[10px] text-purple-600">Full Name <b className="text-red-500">*</b></span>
            <input defaultValue={userData.fullname} className=" h-full w-full pl-4 bg-white outline-none text-md rounded-md "></input>
          </div>

          <div className=" h-10 relative rounded-md border-2 border-gray-300">
            <span className=" absolute bottom-8 left-2 bg-white pl-2 pr-2 text-[10px] text-purple-600">Phone Number <b className="text-red-500">*</b></span>
            <input defaultValue={userData.phoneNumber} className=" h-full w-full pl-4 bg-white outline-none text-md rounded-md "></input>
          </div>

          <div className=" h-10 relative rounded-md border-2 border-gray-300">
            <span className=" absolute bottom-8 left-2 bg-white pl-2 pr-2 text-[10px] text-purple-600">Email address <b className="text-red-500">*</b></span>
            <input defaultValue={userData.email} className=" h-full w-full pl-4 bg-white outline-none text-md rounded-md "></input>
          </div>

          <div className=" h-10 relative rounded-md border-2 border-gray-300">
            <span className=" absolute bottom-8 left-2 bg-white pl-2 pr-2 text-[10px] text-purple-600">password <b className="text-red-500">*</b></span>
            <input defaultValue={userData.password} className=" h-full w-full pl-4 bg-white outline-none text-md rounded-md "></input>
          </div>

          <div className=" h-10 relative rounded-md border-2 border-gray-300">
            <span className=" absolute bottom-8 left-2 bg-white pl-2 pr-2 text-[10px] text-purple-600">Company name</span>
            <input defaultValue={userData.companyName} className=" h-full w-full pl-4 bg-white outline-none text-md rounded-md "></input>
          </div>

          <div className="cursor-pointer">
            <span className="text-xs">Are you Agency? <b className="text-red-500">*</b></span>
            <br></br>

            <section className=" mt-2 flex items-center gap-2">
              <input defaultChecked type="radio" className=" cursor-pointer h-4 w-4" name="agency" /> <label className="mr-4 cursor-pointer text-[15px]">Yes</label>

              <input  type="radio" className="cursor-pointer h-4 w-4" name="agency" /> <label className="cursor-pointer text-[15px]">No</label>
            </section>
          </div>

          <button onClick={(e)=>{
            e.preventDefault()
            navigate("/login")
          
          }} className=" mt-auto h-10 bg-indigo-600 rounded-md text-white">Create Account</button>
        </form>
      </section>
    </div>
  )
}
export default Register