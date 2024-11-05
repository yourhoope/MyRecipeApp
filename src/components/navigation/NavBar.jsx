

import { useState, useEffect, useRef } from "react";
import LogInBtn from "../logging-btn/LogInBtn";
import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import "./NavBar.css";

function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        isSidebarOpen
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);


    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <nav className={`nav-container ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <div onClick={toggleSidebar}>
        <IoMenuOutline className="menu-icon" />
      </div>
      <div
        ref={sidebarRef}
        className={`pages-container ${isSidebarOpen ? "sidebar" : ""}`}
      >
        <Link to="/" className="Logo-Img">
          <img
            src="https://i.pinimg.com/736x/62/e2/e1/62e2e1fd6e131aa7a97456e471deda19.jpg"
            alt="RecipeLogo"
            className="LogoImg"
          />
        </Link>
        <ul onClick={toggleSidebar}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/MyRecipes">My Recipes</Link>
          </li>
        </ul>
      </div>
      <div className="wrapper">
        <LogInBtn />
      </div>
    </nav>
  );
}

export default NavBar;
