import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home-page/home-page";
import LogInPage from "./pages/login-page/login-page";
import RegisterPage from "./pages/register-page/register-page";
import MyRecipesPage from "./pages/my-recipes-page/my-recipes-page";
import AddRecipe from "./pages/add-recipe-page/add-recipe-page";
import UsersRecipePage from "./pages/user-recipe-page/users-recipes"
import MyRecipeDetails from "./pages/my-recipes-details/my-recipes-details";
import UserRecipeDetails from "./pages/users-recipes-details/users-recipes-details";
import EditRecipePage from "./pages/edit-page/edit-page";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/LOGIN",
    element: <LogInPage />,
  },
  {
    path: "/REGISTER",
    element: <RegisterPage />,
  },
  {
    path: "/Recipes",
    element: <UsersRecipePage />,
  },
  {
    path: "/MyRecipes",
    element: <MyRecipesPage />,
  },
  {
    path: "/Add-Recipe",
    element: <AddRecipe />,
  },
  {
    path: "/my-recipe/:recipeTitle",
    element: <MyRecipeDetails />,
  },
  {
    path: "/other-recipe/:recipeTitle",
    element: <UserRecipeDetails />,
  },
  {
    path: "/edit-recipe/:recipeId",
    element: <EditRecipePage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);


