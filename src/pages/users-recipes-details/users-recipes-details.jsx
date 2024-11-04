


import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/navigation/NavBar";

function UserRecipeDetails() {
  const { recipeTitle } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://yourhoope.github.io/recipes-api/recipes-apis.json"
        );
        const result = await response.json();

        const foundRecipe = result?.find(
          (recipe) => recipe.RecipeTitle === recipeTitle
        );

        setRecipe(foundRecipe || null);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [recipeTitle]);

  if (loading) return <div>Loading...</div>;
  if (!recipe) return <div>Recipe not found.</div>;

  return (
    <div>
      <NavBar />
      <div className="recipe-details-container">
        <h1>{recipe.RecipeTitle}</h1>
        <p className="recipe-description">{recipe.Description}</p>

        <div className="times-details">
          <h3>Cooking time</h3>
          <div className="times-wrapper">
            {recipe.Hours || 0} hours {recipe.Mins || 0} minutes
            <p>Servings: {recipe.Servings}</p>
          </div>
        </div>

        <h4>Ingredients</h4>
        <ul className="recipe-list">
          {recipe.Ingredients?.map((ingredient, index) => (
            <li key={index}>
              <input type="checkbox" id={`ingredient-${index}`} />
              <label htmlFor={`ingredient-${index}`}>{ingredient}</label>
            </li>
          ))}
        </ul>

        <h4>Steps</h4>
        <ol className="recipe-steps">
          {recipe.Steps?.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default UserRecipeDetails;
