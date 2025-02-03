import { Outlet } from "react-router-dom"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"

const HomeLanding = () => {
  return (
    <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default HomeLanding