import NavBar from "../../components/navigation/NavBar";
import { useState } from "react";

function MyRecipesPage() {
  const [divs, setDivs] = useState([]);

  const handleAddDiv = () => {
    setDivs([...divs, `Div ${divs.length + 1}`]); // Add a new div label
  };

  return (
    <div>
      <NavBar />
      <div>
        <button onClick={handleAddDiv}>Add Div</button>
        <div>
          {divs.map((div, index) => (
            <div key={index} className="added-div">
              {div}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyRecipesPage;
