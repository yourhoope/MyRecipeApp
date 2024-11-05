
import "./loader.css";
import logo from "../../assets/logo.svg"; 

function LogoLoader() {
  return (
    <div className="logo-loader-overlay">
      <img src={logo} alt="Loading..." className="logo-loader" />
    </div>
  );
}

export default LogoLoader;
