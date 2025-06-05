import AuthForm from "../components/AuthForm";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

function Login() {
const { login } = useUser();
const navigate = useNavigate();

const handleLogin = (e) => {
  e.preventDefault();

  const role = "landlord"; // or "landlord" — switch this manually for now
  const fakeUser = { name: "Paul", role };
  login(fakeUser);
  navigate(`/dashboard/${role}`);
};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login to RentHouse</h2>
        <AuthForm type="login" onSubmit={handleLogin} />
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
