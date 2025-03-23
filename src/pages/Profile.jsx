import userAvatar from "../assets/userAvatar.jpg"
import { IoIosCamera } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate=useNavigate()
  return (
    <div className="h-150 w-80 flex flex-col justify-start rounded-xl bg-white relative">
      <h1 className="h-15 flex justify-start items-center pl-8 relative"><IoIosArrowBack className=" absolute left-1 h-6 w-6" onClick={()=>navigate(-1)}/> Account Settings</h1>

      <section className="flex h-20 flex justify-start items-center pl-5 gap-5">
        <div className=" h-18 w-18 bg-gray-200 rounded-full relative">
          <img src={userAvatar} className=" h-18 w-18 bg-gray-200 rounded-full object-cover "></img>
          <div className="w-5 h-5 rounded-full flex justify-center items-center absolute bottom-0 right-0 bg-purple-600 text-white"><IoIosCamera/></div>
        </div>
        <div>
          <h1 className="text-md text-slate-900">Marry Doe</h1>
          <p className="text-[12px] text-gray-600">Marry@Gamil.com</p>
        </div>

      </section>

      <p className="pl-4 pr-4 mt-2 pt-2 pb-2 text-[13px] text-slate-900 border-dotted border-t-1 border-b-1 border-gray-400"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti eveniet laudantium recusandae. Accusantium reiciendis reprehenderit voluptatum nisi ipsa minima numquam!</p>

    </div>
  )
}
export default Profile