import "./login-form.css";

import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";




function LogInForm(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/MyRecipes");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setSuccess("Logged in with Google successfully!");
      navigate("/MyRecipes");
    } catch (error) {
      setError(error.message);
    }
  };
return (
  <div className="login-container">
    <form action={handleSubmit} className="logInform-container">
      <h1>LOG IN</h1>
      <div className="loginput-box">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          required
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          required
        />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          Log In
        </button>
      </div>

      <div className="newAcc-container">
        <p>
          Don`t have an account? <a href="/MyRecipeApp/REGISTER"> Register </a>
        </p>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <h4>OR</h4>
        <div className="google-container">
          <button className="googlebtn" onClick={handleGoogleSignIn}>
            <FaGoogle /> Continue with google
          </button>
        </div>
      </div>
    </form>
  </div>
);
}

export default LogInForm;