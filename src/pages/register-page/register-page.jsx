import NavBar from "../../components/navigation/NavBar";
import RegisterForm from "../../components/auth/register/register-form";
import './register-page.css'

function RegisterPage() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="form-container">
        <RegisterForm></RegisterForm>
      </div>
    </div>
  );
}

export default RegisterPage;
