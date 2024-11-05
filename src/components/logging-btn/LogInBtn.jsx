import "./LogInBtn.css";
import { useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase"; 
import { onAuthStateChanged, signOut } from "firebase/auth";

function LogInBtn() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const containerRef = useRef(null);

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

 useEffect(() => {
   const handleClickOutside = (event) => {
     if (containerRef.current && !containerRef.current.contains(event.target)) {
       setShow(false);
     }
   };

   if (show) {
     document.addEventListener("mousedown", handleClickOutside);
   } else {
     document.removeEventListener("mousedown", handleClickOutside);
   }

   return () => {
     document.removeEventListener("mousedown", handleClickOutside);
   };
 }, [show]);

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
        <div ref={containerRef}  className="logout-container">
          <button className="logoutBtn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default LogInBtn;
