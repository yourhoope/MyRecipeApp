import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home-page/home-page";
import LogInPage from "./pages/login-page/login-page";
import RegisterPage from "./pages/register-page/register-page";
import MyRecipesPage from "./pages/my-recipes-page/my-recipes-page";


// Components -> Pages -> main.jsx
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
    path: "/MyRecipes",
    element: <MyRecipesPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);


