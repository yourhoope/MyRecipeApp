import NavBar from "../../components/navigation/NavBar";
import MyRecipeCard from "../../common/cards/my-recipe-cards/MyRecipeCard";
import Footer from "../../components/footer/footer";
import "./my-recipe-page.css";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

function MyRecipesPage() {
  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  const handleClick = () => {
    if (!user) {
      navigate("/LOGIN");
      return;
    } else {
      navigate("/Add-Recipe");
    }
  };
  return (
    <div>
      <NavBar />
      <div className="myrec-container">
        <div className="myrec-wrapper">
          <h1>Your Added Recipes</h1>
          <MyRecipeCard></MyRecipeCard>
          <button className="myadd-btn" onClick={handleClick}>
            {" "}
            Add Recipe
          </button>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default MyRecipesPage;
