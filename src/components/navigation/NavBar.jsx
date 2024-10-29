import SearchBar from "../search-bar/SearchBar";
import LogInBtn from "../logging-btn/LogInBtn";
import MyRecipeLogo from "../../assets/MyRecipesLogo.png";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav-container">
      <div className="pages-container">
        <a href="/" className="Logo-Img">
          <img src={MyRecipeLogo} alt="RecipeLogo" className="LogoImg" />
        </a>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Recipes">Recipes</a>
          </li>
          <li>
            <a href="/MyRecipes">My Recipes</a>
          </li>
        </ul>
      </div>
      <div className="wrapper">
        <SearchBar></SearchBar>
        <LogInBtn></LogInBtn>
      </div>
    </nav>
  );
}

export default NavBar;
