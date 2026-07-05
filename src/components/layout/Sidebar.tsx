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
    <div>
    <h1>My Reading Adventure</h1>
    {navItems.map((navItem)=> <li>{navItem.label}</li>)}
    </div>
  )
}
