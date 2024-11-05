

import { useEffect, useState } from "react";
import NavBar from "../../components/navigation/NavBar";
import { useParams } from "react-router-dom";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import "./my-recipes-details.css";
import LogoLoader from "../../common/loader/laoder";

function MyRecipeDetails() {
  const { recipeTitle } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const fetchRecipe = async () => {
      const user = auth.currentUser;
      if (user) {
        const recipesRef = collection(db, "users", user.uid, "recipes");
        const q = query(recipesRef, where("RecipeTitle", "==", recipeTitle));

        try {
          const snapshot = await getDocs(q);
          if (!snapshot.empty) {
            setRecipe(snapshot.docs[0].data());
          } else {
            console.log("No recipe found with that title.");
          }
        } catch (error) {
          console.error("Error fetching recipe:", error);
        }
      }
      setLoading(false);
    };

    fetchRecipe();
  }, [recipeTitle, auth, db]);

  if (loading) {
    return <LogoLoader/>;
  }

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

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

export default MyRecipeDetails;
