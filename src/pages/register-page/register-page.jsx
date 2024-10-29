import NavBar from "../../components/navigation/NavBar";
import RegisterForm from "../../components/auth/register/register-form";


function RegisterPage() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="loginpage-container">
        <RegisterForm></RegisterForm>
      </div>
    </div>
  );
}

export default RegisterPage;
