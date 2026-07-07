import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import  "./Layout.css"

export default function Layout() {
  return (
    <div className="container">
    <Sidebar/>
    <div id="main-content">
    <Header/>
    <main>
          <Outlet />
        </main>
        </div>
    </div>
  )
}
