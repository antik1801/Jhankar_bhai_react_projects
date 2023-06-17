import { Outlet } from "react-router-dom"
import Navbar from "../components/Shared/Navbar/Navbar"

const Main = () => {
  return (
    <div>
      {/* All content here */}
      <Navbar></Navbar>
      <div className="pt-28 pb-20">
      <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Main