import React, { useState } from "react";
import { Link } from "react-router-dom";

function AuthForm({ type, onSubmit }) {
  const [accountType, setAccountType] = useState("tenant");
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    employment: "",
    stateOfOrigin: "",
    permanentAddress: "",
    placeOfWork: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAccountTypeChange = (e) => {
    setAccountType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit({ ...form, accountType });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 font-inter">
      {type === "signup" && (
        <>
          {(type === "signup" || type === "login") && (
            <div>
              <div>
                <h1>Account Type</h1>
              </div>
              <div className="flex space-x-4 mb-2">
                <label className="flex items-center ">
                  <input
                    type="radio"
                    name="accountType"
                    value="tenant"
                    checked={accountType === "tenant"}
                    onChange={handleAccountTypeChange}
                    className="mr-2 accent-black cursor-pointer"
                  />
                  Tenant
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="accountType"
                    value="landlord"
                    checked={accountType === "landlord"}
                    onChange={handleAccountTypeChange}
                    className="mr-2 accent-black cursor-pointer"
                  />
                  Landlord
                </label>
              </div>
            </div>
          )}

          <label className="block">
            Full Name
            <input
              type="text"
              name="fullname"
              // placeholder="Full Name"
              className="w-full px-4 py-2 border border-[#000000] rounded-xl"
              value={form.fullname}
              onChange={handleChange}
              required
            />
          </label>

          {/* Email & Phone side by side */}
          <div className="flex space-x-4">
            <label className="w-1/2 block">
              Email
              <input
                type="email"
                name="email"
                // placeholder="Email"
                className="w-full px-4 py-2 border rounded-xl"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
            <label className="w-1/2 block">
              Phone Number
              <input
                type="text"
                name="phonenumber"
                // placeholder="Phone Number"
                className="w-full px-4 py-2 border rounded-xl"
                value={form.phonenumber}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          {/* Tenant-specific fields */}
          {accountType === "tenant" && (
            <>
              {/* Employment & State of Origin side by side */}
              <div className="flex space-x-4">
                <label className="w-1/2 block">
                  Employment Status
                  <input
                    type="text"
                    name="employment"
                    // placeholder="Employment Status"
                    className="w-full px-4 py-2 border rounded-xl"
                    value={form.employment}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="w-1/2 block">
                  State of Origin
                  <input
                    type="text"
                    name="stateOfOrigin"
                    // placeholder="State of Origin"
                    className="w-full px-4 py-2 border rounded-xl"
                    value={form.stateOfOrigin}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <label className="block">
                Place of Work
                <input
                  type="text"
                  name="placeOfWork"
                  // placeholder="Place of Work"
                  className="w-full px-4 py-2 border rounded-xl"
                  value={form.placeOfWork}
                  onChange={handleChange}
                  required
                />
              </label>
            </>
          )}

          <label className="block">
            Permanent Address
            <input
              type="text"
              name="permanentAddress"
              // placeholder="Permanent Address"
              className="w-full px-4 py-2 border rounded-xl"
              value={form.permanentAddress}
              onChange={handleChange}
              required
            />
          </label>

          {/* Password & Confirm Password side by side */}
          <div className="flex space-x-4">
            <label className="w-1/2 block">
              Password
              <input
                type="password"
                name="password"
                // placeholder="Password"
                className="w-full px-4 py-2 border rounded-xl"
                value={form.password}
                onChange={handleChange}
                required
              />
            </label>
            <label className="w-1/2 block">
              Confirm Password
              <input
                type="password"
                name="confirmPassword"
                // placeholder="Confirm Password"
                className="w-full px-4 py-2 border rounded-xl"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </>
      )}

      {type !== "signup" && (
        <div className="p-10">
          <label className="block mb-12">
            Email
            <input
              type="email"
              name="email"
              placeholder="info.johncane333@gmail.com"
              className="w-full px-4 py-2 border rounded-xl mt-1"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="block">
            Password
            <input
              type="password"
              name="password"
              placeholder="*****************"
              className="w-full px-4 py-2 border rounded-xl mt-1"
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>
          {/* Remember me and Forgot Password */}
          <div className="flex items-center justify-between mt-12">
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                name="remember"
                className="mr-2 accent-[#4D0000] cursor-pointer"
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
        </div>
      )}

      <div className="flex justify-center">
        <button
          type="submit"
          className="w-[50%] bg-[#4D0000] text-white py-2 rounded-full cursor-pointer"
        >
          {type === "signup" ? "Register" : "Login"}
        </button>
      </div>
    </form>
  );
}

export default AuthForm;
