import { Outlet } from "react-router"
import Navbar from "./components/layout/Navbar"


function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
