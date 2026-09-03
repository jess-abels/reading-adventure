import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
    const navItems = [
  {
    label: "Home",
    path: "/",
    img: "./images/home-icon.png"
  },
  {
    label: "My Books",
    path: "/books",
    img:"./images/book-icon.png"
  },
  {
    label: "Goals",
    path: "/goals",
    img: "./images/goals-icon.png"
  }
];

  return (
    <div id="sidebar">
    <Link to="/"><img id="logo" src="./images/rainbow-book.png"/></Link>
    <h1>My Reading Adventure</h1>
    <ul>
    {navItems.map((navItem)=>  <><li className="nav-item" key={navItem.path}><img className="sidebar-icon"src={navItem.img}/> <NavLink to={navItem.path}>{navItem.label}</NavLink></li></>)}
    </ul>
    <img id="reading-girl-img" src="./images/girl-reading.png"/>
    </div>
  )
}
