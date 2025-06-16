import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

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

const AuthForm2 = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Replace with your actual login logic
      // let userData;
      // if (values.accountType === "tenant") {
      //   userData = await loginTenant(values);
      // } else {
      //   userData = await loginLandlord(values);
      // }
      // For demonstration, we'll just mock userData:
      const userData = { ...values, token: "mock-token" };
      localStorage.setItem("user", JSON.stringify(userData));
      alert("Login successful!");
      resetForm();
      // Redirect or update app state as needed
    } catch (error) {
      alert("Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
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
            <ErrorMessage name="accountType" component="div" className="text-red-500" />
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
            <ErrorMessage name="email" component="div" className="text-red-500" />
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
            <ErrorMessage name="password" component="div" className="text-red-500" />
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
            <Link to="#" className="text-[#000000] text-sm hover:underline">
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
    </>
  );
};

export default AuthForm2;
