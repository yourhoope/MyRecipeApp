// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./OtherRecipes.css";





// function OtherRecipes() {
//   const [recipeData, setRecipeData] = useState("");
//     const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://yourhoope.github.io/recipes-api/recipes-apis.json"
//         );
//         const result = await response.json();
//         setRecipeData(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); 

  

//   return (
//     <div className="users-container">
//       {Object.keys(recipeData).map((key, index) => (
//         <div key={index}>
//           {recipeData[key].map((recipe, i) => (
//             <div className="recipe-card" key={i}>
//               <img src={recipe.image} alt="Food Image" className="rec-img" />

//               <div
//                 className="card-info"
//                 onClick={() => navigate(`/other-recipe/${recipe.RecipeTitle}`)}
//               >
//                 <h3>{recipe.RecipeTitle}</h3>
//                 <hr />
//                 <h4>Cooking time</h4>
//                 <ul>
//                   {recipe.Hours ? <li>{recipe.Hours} hours</li> : null}
//                   {recipe.Mins ? <li>{recipe.Mins} minutes</li> : null}
//                 </ul>
//                 <hr />
//                 <p>{recipe.Description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default OtherRecipes;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./OtherRecipes.css";

function OtherRecipes() {
  const [recipeData, setRecipeData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://yourhoope.github.io/recipes-api/recipes-apis.json"
        );
        const result = await response.json();
        setRecipeData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="users-container">
      {recipeData.map((recipe, index) => (
        <div className="recipe-card" key={index}>
          <img src={recipe.imageURL} alt="Food Image" className="rec-img" />
          <div
            className="card-info"
            onClick={() => navigate(`/other-recipe/${recipe.RecipeTitle}`)}
          >
            <h3>{recipe.RecipeTitle}</h3>
            <hr />
            <h4>Cooking time</h4>
            <ul>
              {recipe.Hours ? <li>{recipe.Hours} hours</li> : null}
              {recipe.Mins ? <li>{recipe.Mins} minutes</li> : null}
            </ul>
            <hr />
            <p>{recipe.Description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OtherRecipes;
