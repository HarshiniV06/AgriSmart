import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const getLoginErrorMessage = (err) => {
    const status = err?.response?.status;
    const message = err?.response?.data?.message || err?.response?.data?.error;

    if (status === 404) {
      return "No existing account found. Please sign up first.";
    }

    if (typeof message === "string") {
      const normalized = message.toLowerCase();
      if (normalized.includes("not found") || normalized.includes("no account")) {
        return "No existing account found. Please sign up first.";
      }
      if (normalized.includes("invalid") || normalized.includes("password")) {
        return "Invalid email or password.";
      }
      return message;
    }

    if (status === 401) {
      return "Invalid email or password.";
    }

    return "Login failed. Please try again.";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:5000/login", form);
      localStorage.setItem("token", res.data.access_token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/");
    } catch (err) {
      console.error("Login error:", err);
      setError(getLoginErrorMessage(err));
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/login.jpg')" }}
    >
      <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-10 w-[380px]">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          AgriSmart Login 🌾
        </h2>

        {error && (
          <p className="text-red-600 text-sm text-center mb-3">{error}</p>
        )}

        <form onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          New here?{" "}
          <Link to="/signup" className="text-green-700 font-semibold">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}
