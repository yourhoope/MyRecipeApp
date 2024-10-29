import "./LogInBtn.css";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa"; // Profile Icon
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase"; // Ensure Firebase is imported correctly
import { onAuthStateChanged, signOut } from "firebase/auth";

function LogInBtn() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const logout = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => logout();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const [show, setShow] = useState(false); //

  return (
    <div>
      {user ? (
        <div className="profile-container">
          <FaUserCircle
            size={30}
            onClick={() => setShow(!show)}
            className="profile-icon"
            style={{
              cursor: "pointer",
              width: "35px",
              height: "35px",
              color: "#f1645f",
            }}
          />
        </div>
      ) : (
        <button className="loginBtn" onClick={() => navigate("/LOGIN")}>
          LOG IN
        </button>
      )}
      {show && (
        <div className="logout-container">
          <button className="logoutBtn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default LogInBtn;
