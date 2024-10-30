


import NavBar from "../../components/navigation/NavBar";
import FileUpload from "../../common/FileUpload/FileUpload";
import { useState, useEffect } from "react";
import { db, auth } from "../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";

function EditRecipePage() {
  const { recipeId } = useParams();
  const [formData, setFormData] = useState({
    RecipeTitle: "",
    Description: "",
    Steps: [""],
    Ingredients: [""],
    Hours: "",
    Mins: "",
    Servings: "",
    imageUrl: "",
  });
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      if (!user) return;

      try {
        const recipeDocRef = doc(db, "users", user.uid, "recipes", recipeId);
        const recipeDoc = await getDoc(recipeDocRef);

        if (recipeDoc.exists()) {
          setFormData(recipeDoc.data());
        } else {
          console.log("Recipe not found");
        }
      } catch (error) {
        console.error("Error fetching recipe: ", error);
      }
    };

    fetchRecipe();
  }, [recipeId, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      console.log("User is not logged in");
      return;
    }

    try {
      const recipeDocRef = doc(db, "users", user.uid, "recipes", recipeId);
      await updateDoc(recipeDocRef, {
        ...formData,
        updatedAt: new Date(),
      });
      console.log("Recipe updated successfully!");
      navigate("/MyRecipes");
    } catch (error) {
      console.error("Error updating recipe: ", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleArrayChange = (index, type, value) => {
    const updatedArray = [...formData[type]];
    updatedArray[index] = value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [type]: updatedArray,
    }));
  };

  const handleAddField = (type) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [type]: [...prevFormData[type], ""],
    }));
  };

  const handleRemoveField = (index, type) => {
    const updatedArray = [...formData[type]];
    updatedArray.splice(index, 1);

    setFormData((prevFormData) => ({
      ...prevFormData,
      [type]: updatedArray,
    }));
  };

  const handleFileUpload = (url) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      imageUrl: url,
    }));
  };

  const handleClear = () => {
    setFormData({
      RecipeTitle: "",
      Description: "",
      Steps: [""],
      Ingredients: [""],
      Hours: "",
      Mins: "",
      Servings: "",
      imageUrl: "",
    });
  };

  return (
    <div>
      <NavBar />
      <div className="dial-container">
        <h1>Edit Recipe</h1>
        <hr />

        <form onSubmit={handleSubmit} className="form-container">
          <div className="sec-1">
            <FileUpload
              onFileUpload={handleFileUpload}
              imageUrl={formData.imageUrl}
            />
            <input
              type="text"
              onChange={handleInputChange}
              value={formData.RecipeTitle}
              name="RecipeTitle"
              placeholder="Recipe Title"
              required
            />

            <input
              type="text"
              onChange={handleInputChange}
              value={formData.Description}
              name="Description"
              placeholder="Shortly describe your recipe"
              required
              className="input-description"
            />
          </div>

          <div className="list-container">
            <div>
              <h1>Ingredients</h1>
              <ul>
                {formData.Ingredients.map((ingredient, index) => (
                  <li key={index}>
                    <textarea
                      type="text"
                      value={ingredient}
                      onChange={(e) =>
                        handleArrayChange(index, "Ingredients", e.target.value)
                      }
                    />
                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => handleRemoveField(index, "Ingredients")}
                    >
                      x
                    </button>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="add-btn"
                onClick={() => handleAddField("Ingredients")}
              >
                +
              </button>
            </div>

            <div>
              <h1>Steps</h1>
              <ul>
                {formData.Steps.map((step, index) => (
                  <li key={index}>
                    <textarea
                      type="text"
                      className="textarea"
                      value={step}
                      onChange={(e) =>
                        handleArrayChange(index, "Steps", e.target.value)
                      }
                    />
                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => handleRemoveField(index, "Steps")}
                    >
                      x
                    </button>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="add-btn"
                onClick={() => handleAddField("Steps")}
              >
                +
              </button>
            </div>
          </div>

          <div className="details-container">
            <input
              type="number"
              onChange={handleInputChange}
              value={formData.Hours}
              name="Hours"
              placeholder="Hrs"
              className="times"
            />
            <input
              type="number"
              onChange={handleInputChange}
              value={formData.Mins}
              name="Mins"
              placeholder="Mins"
              className="times"
            />
            <input
              type="number"
              onChange={handleInputChange}
              value={formData.Servings}
              name="Servings"
              placeholder="Servings"
            />
          </div>

          <div className="form-btns">
            <button type="submit">Save Changes</button>
            <button type="button" onClick={handleClear} className="clear-btn">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditRecipePage;


