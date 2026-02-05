import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:5000/signup", form);
      navigate("/login");
    } catch (err) {
      console.error("Signup error:", err);
      alert("Signup failed. Email might already exist.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/login.jpg')" }}
    >
      <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-10 w-[380px]">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Create Account 🌱
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Full Name"
            className="w-full mb-4 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-600"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-600"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-600"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <button className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition">
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link to="/" className="text-green-700 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
