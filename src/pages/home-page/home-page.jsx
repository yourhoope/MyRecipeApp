import NavBar from "../../components/navigation/NavBar";
import Banner from "../../common/banner/banner";
import AddBtn from "../../components/add-btn/AddBtn";
import OtherRecipes from "../../common/cards/other-users-cards/OtherRecipes";
import Footer from "../../components/footer/footer";
import "./home-page.css";

function HomePage() {
  return (
    <div className="home-container">
      <NavBar></NavBar>
      <div className="home-wrapper">
        <Banner></Banner>
        <OtherRecipes />
      </div>
      <AddBtn></AddBtn>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
