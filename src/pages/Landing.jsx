import { useNavigate } from "react-router-dom"

const Landing = () => {
    const navigate=useNavigate()
  return (
    <div className="h-150 w-80 p-5 pb-9 flex flex-col justify-end gap-2 rounded-xl bg-white">
        <div className="flex flex-col gap-2">
            <h1 className=" text-xl font-bold">Welcome to PopX</h1>
            <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, hic!</p>
        </div>
        <button className="h-10 bg-indigo-600 text-white rounded-md cursor-pointer font-sans " onClick={()=>navigate("/register")}>Create Account</button>
        <button className="h-10 bg-purple-300 text-black rounded-md cursor-pointer font-sans"  onClick={()=>navigate("/login")}>Already Registered? Login</button>
    </div>
  )
}
export default Landing