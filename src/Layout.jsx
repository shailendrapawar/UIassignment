import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className=" bg-gray-200 h-screen flex items-center justify-center">
    <Outlet/>
    </div>
  )
}
export default Layout