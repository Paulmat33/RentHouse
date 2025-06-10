import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";
import house from "../assets/loginimg.png";
import logo from "../assets/footerlogo.png"; 

function Signup() {
  const handleSignup = (data) => {
    // handle signup logic here
    console.log("Signup submitted", data);
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
          <h2 className="text-2xl font-bold pb-6 text-center text-gray-800">
            Create an Account
          </h2>
          <AuthForm type="signup" onSubmit={handleSignup} />
          <p className="mt-1 text-center text-[16px] text-[#00000]">
            Already have an account?{" "}
            <Link to="/login" className="text-[#4D0000] hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
     </div>
  );
}

export default Signup;
