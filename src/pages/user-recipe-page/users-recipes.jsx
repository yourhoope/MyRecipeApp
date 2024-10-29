import NavBar from "../../components/navigation/NavBar";
import OtherRecipes from "../../common/cards/other-users-cards/OtherRecipes";
import AddBtn from "../../components/add-btn/AddBtn";
import Footer from "../../components/footer/footer";
import "./users-recipes.css";

function UsersRecipePage() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="rec-container">
        <div className="rec-wrapper">
      <h1>Explore Our Menu</h1>
          <OtherRecipes></OtherRecipes>
        </div>
      </div>
      <AddBtn></AddBtn>
      <Footer></Footer>
    </div>
  );
}

export default UsersRecipePage;
