import "./register-form.css";
import { FaUser, FaLock, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../../firebase";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess("Account created successfully!");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setSuccess("Logged in with Google successfully!");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <h2>REGISTER</h2>
        <label htmlFor="email"> Email:</label>
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
        <label htmlFor="password"> Create password:</label>
        <div className="input-box">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required
          />
          <FaLock />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <h4>OR</h4>
        <div className="btn-container">
          <button
            type="button"
            className="googlebtn"
            onClick={handleGoogleSignIn}
          >
            <FaGoogle /> Continue with Google
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
