import React, { useState } from "react";

const LandlordSignup = () => {
  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    permanentAddress: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form>
        <label className="block mb-4">
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
        <div className="flex space-x-4 mb-4">
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

        <label className="block mb-4">
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
        <div className="flex space-x-4 mb-4">
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

export default LandlordSignup;
