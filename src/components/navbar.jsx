import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink className={({ isActive }) => (isActive ? "active" : undefined)} to="/">Home</NavLink>
      <NavLink className={({ isActive }) => (isActive ? "active" : undefined)} to="/pokemones">Pokemones</NavLink>
     </nav>
  );
}