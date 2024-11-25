// from layouts
import { Outlet } from "react-router-dom"
import {Footer, Navbar} from "./"


function MainLayout() {
  return (
    <>
        <Navbar/>
        <main className="grow py-10">
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default MainLayout