import SearchBar from "../search-bar/SearchBar";
import LogInBtn from "../LogInbutton/LogInBtn";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="">Recipes</a>
        </li>
        <li>
          <a href="/MyRecipes">My Recipes</a>
        </li>
      </ul>
      <SearchBar></SearchBar>
      <LogInBtn></LogInBtn>
    </nav>
  );
}

export default NavBar;
