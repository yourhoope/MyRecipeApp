import NavBar from "../../components/navigation/NavBar";
import LogInForm from "../../components/auth/login/login-form";
import './login-page.css';

function LogInPage() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="loginpage-container">
        <LogInForm></LogInForm>
      </div>
    </div>
  );
}

export default LogInPage;