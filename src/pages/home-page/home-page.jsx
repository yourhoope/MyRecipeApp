import NavBar from "../../components/navigation/NavBar";
import Banner from "../../common/banner/banner";
import AddRecipeDialog from "../../common/Add-Dialog/AddRecipeDialog";
import "./home-page.css";

function HomePage() {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <div className="addbtn-container">
        <AddRecipeDialog></AddRecipeDialog>
      </div>
    </div>
  );
}

export default HomePage;
