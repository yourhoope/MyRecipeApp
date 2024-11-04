import { useEffect, useState } from "react";
import "./MyRecipeCard.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  doc,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function MyRecipeCard() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null); 

  const auth = getAuth();
  const db = getFirestore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async (currentUser) => {
      const uid = currentUser.uid;
      const recipesRef = collection(doc(db, "users", uid), "recipes");

      try {
        const snapshot = await getDocs(recipesRef);
        const recipesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRecipes(recipesData);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchUserData(currentUser);
      } else {
        setLoading(false); 
      }
    });

    return () => unsubscribe();
  }, [auth, db]);

  const handleDelete = async (id) => {
    try {
      if (user) {
        const recipeDocRef = doc(db, "users", user.uid, "recipes", id);
        await deleteDoc(recipeDocRef);
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
        console.log("Recipe deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-recipe/${id}`);
  };

  if (loading) {
    return <p className="loading">Loading...</p>; 
  }

  return (
    <div className="users-container">
      {user ? (
        recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img
              src={recipe.imageUrl || "default_image_url"}
              alt={`${recipe.RecipeTitle} Image`}
              className="rec-img"
            />

            <div
              className="card-info"
              onClick={() => navigate(`/my-recipe/${recipe.RecipeTitle}`)}
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
            <div className="card-actions">
              <button
                onClick={() => handleEdit(recipe.id)}
                className="edit-btn"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(recipe.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="not-signed-recipe">
          <h3>To view your recipes please sign in</h3>
        </div>
      )}
    </div>
  );
}

export default MyRecipeCard;
