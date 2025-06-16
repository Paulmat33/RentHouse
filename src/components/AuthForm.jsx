import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { signupActionTenant, signupActionLandlord } from "../api/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
// import { useUser } from "../context/UserContext";

const validationSchema = Yup.object().shape({
  accountType: Yup.string().required("Account type is required"),
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  permanentAddress: Yup.string().required("Permanent address is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  // Tenant-specific fields
  employmentStatus: Yup.string().when("accountType", {
    is: "tenant",
    then: (schema) => schema.required("Employment status is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  stateOfOrigin: Yup.string().when("accountType", {
    is: "tenant",
    then: (schema) => schema.required("State of origin is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  placeOfWork: Yup.string().when("accountType", {
    is: "tenant",
    then: (schema) => schema.required("Place of work is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
});

const initialValues = {
  accountType: "",
  fullName: "",
  email: "",
  phoneNumber: "",
  permanentAddress: "",
  password: "",
  confirmPassword: "",
  employmentStatus: "",
  stateOfOrigin: "",
  placeOfWork: "",
};

function AuthForm() {
  // const { setUser } = useUser(); // Uncomment if you use context

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      if (values.accountType === "tenant") {
        await signupActionTenant(values);
      } else {
        await signupActionLandlord(values);
      }
      toast.success("Signup successful!");
      resetForm();
    } catch (error) {
      toast.error(error.message || "Signup failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, isSubmitting }) => (
          <Form className="space-y-4 font-inter">
            {/* Account Type selection */}
            <div>
              <h1>Account Type</h1>
              <div className="flex space-x-4 mb-2">
                <label className="flex items-center">
                  <Field
                    type="radio"
                    name="accountType"
                    value="tenant"
                    className="mr-2 accent-black cursor-pointer"
                  />
                  Tenant
                </label>
                <label className="flex items-center">
                  <Field
                    type="radio"
                    name="accountType"
                    value="landlord"
                    className="mr-2 accent-black cursor-pointer"
                  />
                  Landlord
                </label>
              </div>
              <ErrorMessage name="accountType" component="div" className="text-red-500" />
            </div>

            <label className="block">
              Full Name
              <Field
                type="text"
                name="fullName"
                className="w-full px-4 py-2 border border-[#000000] rounded-xl"
              />
              <ErrorMessage name="fullName" component="div" className="text-red-500" />
            </label>

            {/* Email & Phone side by side */}
            <div className="flex space-x-4">
              <label className="w-1/2 block">
                Email
                <Field
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-xl"
                />
                <ErrorMessage name="email" component="div" className="text-red-500" />
              </label>
              <label className="w-1/2 block">
                Phone Number
                <Field
                  type="text"
                  name="phoneNumber"
                  className="w-full px-4 py-2 border rounded-xl"
                />
                <ErrorMessage name="phoneNumber" component="div" className="text-red-500" />
              </label>
            </div>

            {/* Tenant-specific fields */}
            {values.accountType === "tenant" && (
              <>
                <div className="flex space-x-4">
                  <label className="w-1/2 block">
                    Employment Status
                    <Field
                      type="text"
                      name="employmentStatus"
                      className="w-full px-4 py-2 border rounded-xl"
                    />
                    <ErrorMessage name="employmentStatus" component="div" className="text-red-500" />
                  </label>
                  <label className="w-1/2 block">
                    State of Origin
                    <Field
                      type="text"
                      name="stateOfOrigin"
                      className="w-full px-4 py-2 border rounded-xl"
                    />
                    <ErrorMessage name="stateOfOrigin" component="div" className="text-red-500" />
                  </label>
                </div>
                <label className="block">
                  Place of Work
                  <Field
                    type="text"
                    name="placeOfWork"
                    className="w-full px-4 py-2 border rounded-xl"
                  />
                  <ErrorMessage name="placeOfWork" component="div" className="text-red-500" />
                </label>
              </>
            )}

            <label className="block">
              Permanent Address
              <Field
                type="text"
                name="permanentAddress"
                className="w-full px-4 py-2 border rounded-xl"
              />
              <ErrorMessage name="permanentAddress" component="div" className="text-red-500" />
            </label>

            {/* Password & Confirm Password side by side */}
            <div className="flex space-x-4">
              <label className="w-1/2 block">
                Password
                <Field
                  type="password"
                  name="password"
                  className="w-full px-4 py-2 border rounded-xl"
                />
                <ErrorMessage name="password" component="div" className="text-red-500" />
              </label>
              <label className="w-1/2 block">
                Confirm Password
                <Field
                  type="password"
                  name="confirmPassword"
                  className="w-full px-4 py-2 border rounded-xl"
                />
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
              </label>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-[50%] bg-[#4D0000] text-white py-2 rounded-full cursor-pointer"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "signup"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default AuthForm;
