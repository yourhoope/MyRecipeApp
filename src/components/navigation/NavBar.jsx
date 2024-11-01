// import SearchBar from "../search-bar/SearchBar";
// import LogInBtn from "../logging-btn/LogInBtn";
// import "./NavBar.css";
// import { Link } from "react-router-dom";

// function NavBar() {
//   return(
// <nav className="nav-container">
//   <div className="pages-container">
//     <Link to="/" className="Logo-Img">
//       <img
//         src="https://i.pinimg.com/736x/62/e2/e1/62e2e1fd6e131aa7a97456e471deda19.jpg"
//         alt="RecipeLogo"
//         className="LogoImg"
//       />
//     </Link>
//     <ul>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/Recipes">Recipes</Link>
//       </li>
//       <li>
//         <Link to="/MyRecipes">My Recipes</Link>
//       </li>
//     </ul>
//   </div>
//   <div className="wrapper">
//     <SearchBar />
//     <LogInBtn />
//   </div>
// </nav>
//   )
// }
// export default NavBar;

import { useState } from "react";
import SearchBar from "../search-bar/SearchBar";
import LogInBtn from "../logging-btn/LogInBtn";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className={`nav-container ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <div onClick={toggleSidebar}>
        <IoMenuOutline className="menu-icon" />
      </div>
      <div className={`pages-container ${isSidebarOpen ? "sidebar" : ""}`}>
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
        <SearchBar />
        <LogInBtn />
      </div>
    </nav>
  );
}

export default NavBar;
