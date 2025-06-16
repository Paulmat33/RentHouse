import AuthForm from "../components/AuthForm";
import { Link, useNavigate } from "react-router-dom";
import house from "../assets/signin.png";
import logo from "../assets/footerlogo.png";
import AuthForm2 from "../components/AuthForm2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loginAction } from "../api/auth";

const validationSchema = Yup.object().shape({
  accountType: Yup.string().required("Account type is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const initialValues = {
  accountType: "",
  email: "",
  password: "",
};

function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Map accountType to role for the API
      const { accountType, ...rest } = values;
      const loginData = { ...rest, role: accountType };
      const response = await loginAction(loginData);
      const userData = response.data || response;
      // Store user data and accountType in localStorage
      localStorage.setItem("user", JSON.stringify({ ...userData, fullName: userData.fullName || values.fullName || userData.name || "User", accountType }));
      resetForm();
      // Navigate based on role
      if (accountType === "tenant") {
        navigate("/dashboard/tenant");
      } else if (accountType === "landlord") {
        navigate("/dashboard/landlord");
      }
    } catch (error) {
      alert(
        error.response?.data?.message ||
        error.message ||
        "Login failed"
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center my-[20px] mx-[20px] ">
      <div className="flex gap-[30px] overflow-hidden w-screen h-screen">
        {/* Left: Full Image with Logo overlay */}
        <div className="relative hidden md:block w-1/2 h-full">
          <img src={house} alt="House" className="w-full h-full object-fit" />
          <div className="absolute top-4 left-4 z-10">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>
        </div>
        {/* Right: Signup Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center h-full border rounded-xl border-[#4D0000]">
          <h2 className="text-2xl font-bold pb-12 text-center text-gray-800">
            Welcome Back
          </h2>
          <h1 className="text-center text-[#000000] font-normal ">
            Log in your Account
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4 font-inter">
                <div>
                  <h1>Account Type</h1>
                  <div className="flex space-x-4 mb-2">
                    <label className="flex items-center">
                      <Field
                        type="radio"
                        name="accountType"
                        value="tenant"
                        className="mr-2 accent-black cursor-pointer"
                        disabled={isSubmitting}
                      />
                      Tenant
                    </label>
                    <label className="flex items-center">
                      <Field
                        type="radio"
                        name="accountType"
                        value="landlord"
                        className="mr-2 accent-black cursor-pointer"
                        disabled={isSubmitting}
                      />
                      Landlord
                    </label>
                  </div>
                  <ErrorMessage
                    name="accountType"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <label className="block mb-12">
                  Email
                  <Field
                    type="email"
                    name="email"
                    placeholder="info.johncane333@gmail.com"
                    className="w-full px-4 py-2 border rounded-xl mt-1"
                    disabled={isSubmitting}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </label>
                <label className="block">
                  Password
                  <Field
                    type="password"
                    name="password"
                    placeholder="*****************"
                    className="w-full px-4 py-2 border rounded-xl mt-1"
                    disabled={isSubmitting}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500"
                  />
                </label>
                {/* Remember me and Forgot Password */}
                <div className="flex items-center justify-between mt-12">
                  <label className="flex items-center text-sm">
                    <Field
                      type="checkbox"
                      name="remember"
                      className="mr-2 accent-[#4D0000] cursor-pointer"
                      disabled={isSubmitting}
                    />
                    Remember me
                  </label>
                  <Link
                    to="#"
                    className="text-[#000000] text-sm hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-[50%] bg-[#4D0000] text-white py-2 rounded-full cursor-pointer"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Login"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>

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
