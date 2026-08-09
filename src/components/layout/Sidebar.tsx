import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBook } from "@fortawesome/free-solid-svg-icons";


export default function Sidebar() {
    const navItems = [
  {
    label: "Home",
    path: "/",
    icon: faHouse
  },
  {
    label: "My Books",
    path: "/books",
    icon:faBook
  }
];

  return (
    <div id="sidebar">
    <h1>My Reading Adventure</h1>
    <ul>
    {navItems.map((navItem)=>  <><li key={navItem.path}><FontAwesomeIcon icon={navItem.icon}></FontAwesomeIcon> <NavLink to={navItem.path}>{navItem.label}</NavLink></li></>)}
    </ul>
    </div>
  )
}
