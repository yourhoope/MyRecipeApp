import NavBar from "../../components/navigation/NavBar";
import AddBtn from "../../components/add-btn/AddBtn";
import MyRecipeCard from "../../common/cards/my-recipe-cards/MyRecipeCard";
import Footer from "../../components/footer/footer";

function MyRecipesPage() {
  return (
    <div>
      <NavBar />
      <div className="rec-container">
        <div className="rec-wrapper">
          <h1>Your Added Recipes</h1>
          <MyRecipeCard></MyRecipeCard>
        </div>
      </div>
      <AddBtn></AddBtn>
      <Footer></Footer>
    </div>
  );
}

export default MyRecipesPage;
