import "./login-form.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../../firebase";
import { FaEye } from "react-icons/fa";
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
      setSuccess("Log In successful!");
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
    <form action={handleSubmit}>
      <h1>LOG IN</h1>
      <div className="input-box">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          required
        />

        <FaUser />
      </div>
      <div className="input-box">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          required
        />
        <FaEye />
        <FaLock />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          Log In
        </button>
      </div>

      <div className="register">
        <p>
          Don`t have an account? <a href="/REGISTER"> Register </a>
        </p>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <h4>OR</h4>
        <div className="btn-container">
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