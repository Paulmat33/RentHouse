import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";

function Signup() {
  const handleSignup = (e) => {
    e.preventDefault();
    // handle signup logic here
    console.log("Signup submitted");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>
        <AuthForm type="signup" onSubmit={handleSignup} />
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
