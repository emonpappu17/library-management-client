import { Outlet } from "react-router"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import { Toaster } from "react-hot-toast"


function App() {

  return (
    <>
      <div className="min-h-screen  flex flex-col">
        <Navbar></Navbar>

        {/* <Outlet></Outlet> */}

        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 2000,
              style: {
                background: '#10B981',
              },
            },
            error: {
              duration: 2000,
              style: {
                background: '#EF4444',
              },
            },
          }}
        />
      </div>
    </>
  )
}

export default App
