import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { signupActionTenant } from "../api/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TenantSignup = () => {
  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    permanentAddress: "",
    password: "",
    confirmPassword: "",
    stateOfOrigin: "",
    employmentStatus: "",
    placeOfWork: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await signupActionTenant(form);
      console.log(response);
      toast.success("Signup successful!");
      Navigate("/login");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="space-y-4 font-inter">
        <label className="block">
          Full Name
          <input
            type="text"
            name="fullName"
            className="w-full px-4 py-2 border border-[#000000] rounded-xl"
            value={form.fullName}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </label>

        {/* Email & Phone side by side */}
        <div className="flex space-x-4">
          <label className="w-1/2 block">
            Email
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-xl"
              value={form.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </label>
          <label className="w-1/2 block">
            Phone Number
            <input
              type="number"
              name="phoneNumber"
              className="w-full px-4 py-2 border rounded-xl"
              value={form.phoneNumber}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </label>
        </div>

        <div className="flex space-x-4">
          <label className="w-1/2 block">
            Employment Status
            <input
              type="text"
              name="employmentStatus"
              className="w-full px-4 py-2 border rounded-xl"
              value={form.employment}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </label>
          <label className="w-1/2 block">
            State of Origin
            <input
              type="text"
              name="stateOfOrigin"
              className="w-full px-4 py-2 border rounded-xl"
              value={form.stateOfOrigin}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </label>
        </div>
        <label className="block">
          Place of Work
          <input
            type="text"
            name="placeOfWork"
            className="w-full px-4 py-2 border rounded-xl"
            value={form.placeOfWork}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </label>

        <label className="block">
          Permanent Address
          <input
            type="text"
            name="permanentAddress"
            className="w-full px-4 py-2 border rounded-xl"
            value={form.permanentAddress}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </label>

        {/* Password & Confirm Password side by side */}
        <div className="flex space-x-4">
          <label className="w-1/2 block">
            Password
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border rounded-xl"
              value={form.password}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </label>
          <label className="w-1/2 block">
            Confirm Password
            <input
              type="password"
              name="confirmPassword"
              className="w-full px-4 py-2 border rounded-xl"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </label>
        </div>
      </form>
    </>
  );
};

export default TenantSignup;
