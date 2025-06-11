import AuthForm from "../components/AuthForm";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import house from "../assets/signin.png";
import logo from "../assets/footerlogo.png";

function Login() {
  const { login } = useUser();
  const navigate = useNavigate();

  // Accept formData instead of event
  const handleLogin = (formData) => {
    const role = formData.accountType || "tenant";
    const fakeUser = { name: "Paul", role };
    login(fakeUser);
    navigate(`/dashboard/${role}`);
  };

  return (
    <div className="flex items-center my-[20px] mx-[20px] ">
      <div className="flex gap-[30px] overflow-hidden w-screen h-screen">
        {/* Left: Full Image with Logo overlay */}
        <div className="relative hidden md:block w-1/2 h-full">
          <img
            src={house}
            alt="House"
            className="w-full h-full object-fit"
          />
          <div className="absolute top-4 left-4 z-10">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>
        </div>
        {/* Right: Signup Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center h-full border rounded-xl border-[#4D0000]">
          <h2 className="text-2xl font-bold pb-12 text-center text-gray-800">
            Welcome Back
          </h2>
          <h1 className="text-center text-[#000000] font-normal ">Log in your Account</h1>
          <AuthForm type="login" onSubmit={handleLogin} />
          <p className="mt-4 text-center text-[16px] text-[#00000]">
          Don't have an account?{" "}
            <Link to="/signup" className="text-[#4D0000] hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
     </div>
  );
}

export default Login;
