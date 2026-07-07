import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
    const navItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "My Books",
    path: "/books",
  }
];

  return (
    <div id="sidebar">
    <h1>My Reading Adventure</h1>
    <ul>
    {navItems.map((navItem)=>  <li key={navItem.path}> <NavLink to={navItem.path}>{navItem.label}</NavLink></li>)}
    </ul>
    </div>
  )
}
