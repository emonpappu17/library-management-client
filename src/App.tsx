import { Outlet } from "react-router"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"


function App() {

  return (
    <>
      <div className="min-h-screen  flex flex-col">
        <Navbar></Navbar>

        {/* <Outlet></Outlet> */}

        <div className="container mx-auto">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
