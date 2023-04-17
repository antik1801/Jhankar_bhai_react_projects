import { Outlet } from "react-router-dom"
import MyHeader from "./components/MyHeader"
import React from "react"
import MyFooter from "./components/MyFooter"


const App = () => {
  return (
  <React.Fragment>
    <MyHeader></MyHeader>
    <Outlet></Outlet>
    <div className="mt-70px md:mt-[120px]">
    <MyFooter></MyFooter>
    </div>
  </React.Fragment>
  )
}

export default App
