import "./banner.css";

function Banner(){
return (
  <div className="banner-container">
    <div className="plate-container">
      <div className="text-container">
        <p>Eat Fresh. Eat Happy.</p>
        <a href="/MyRecipeApp/Recipes">
          <button className="expl-btn">Explore Our Menu</button>
        </a>
      </div>
    </div>
  </div>
);
}

export default Banner;