import "./AddBtn.css";

import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";


function AddBtn() {
  const navigate = useNavigate();

  const [user] = useAuthState(auth); 

  const handleClick = () => {
    if (!user) {
      navigate("/LOGIN");
      return; 
    } else {
      navigate("/Add-Recipe"); 
    }
  };

  return (
    <div className="btn-container" onClick={handleClick}>
      <button className="AddBtn">+</button>
    </div>
  );
}

export default AddBtn;
