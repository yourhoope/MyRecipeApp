import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/navigation/NavBar";

function OtherRecipes() {
  const { recipeTitle } = useParams();
  const [recipeData, setRecipeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/RecipesData");
        const result = await response.json();

        const foundRecipe = result?.Rec1?.find(
          (recipe) => recipe.RecipeTitle === recipeTitle
        );

        setRecipeData(foundRecipe || null);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [recipeTitle]);

  if (loading) return <div>Loading...</div>;
  if (!recipeData) return <div>Recipe not found.</div>;

  return (
    <div>
      <NavBar />
      <div className="recipe-details-container">
        <h1>{recipeData.RecipeTitle}</h1>
        <p className="recipe-description">{recipeData.Description}</p>

        <div className="times-details">
          <h3>Cooking time</h3>
          <div className="times-wrapper">
            {recipeData.Hours || 0} hours {recipeData.Mins || 0} minutes
            <p>Servings: {recipeData.Servings}</p>
          </div>
        </div>

        <h4>Ingredients</h4>
        <ul className="recipe-list">
          {recipeData.Ingredients?.map((ingredient, index) => (
            <li key={index}>
              <input type="checkbox" id={`ingredient-${index}`} />
              <label htmlFor={`ingredient-${index}`}>{ingredient}</label>
            </li>
          ))}
        </ul>

        <h4>Steps</h4>
        <ol className="recipe-steps">
          {recipeData.Steps?.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default OtherRecipes;
