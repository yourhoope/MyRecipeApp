import "./banner.css";
import { Link } from "react-router-dom";
function Banner(){
return (
  <div className="banner-container">
    <div className="plate-container">
      <div className="text-container">
        <p>Eat Fresh. Eat Happy.</p>
        <Link to="/Recipes">
          <button className="expl-btn">Explore Our Menu</button>
        </Link>
      </div>
    </div>
  </div>
);
}

export default Banner;