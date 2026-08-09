import {
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import logo from "../../assets/logo.png";

function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://rehabai-api.onrender.com",
        formData
      );

      // Store JWT
      localStorage.setItem("token", response.data.token);

      // Store user information
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      // Go to dashboard
      navigate("/dashboard");

    } catch (error) {
      setError(
        error.response?.data?.message ||
        "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg rounded-3xl bg-white p-10 shadow-2xl">

      {/* Logo */}

      <div className="flex justify-center">
        <img
          src={logo}
          alt="RehabAI Logo"
          className="h-20 w-20 object-contain"
        />
      </div>

      {/* Heading */}

      <div className="mt-4 text-center">

        <h1 className="text-3xl font-bold text-[#173D47]">
          Welcome Back
        </h1>

        <p className="mt-2 text-gray-500">
          Sign in to continue your recovery journey
        </p>

      </div>

      {/* Error */}

      {error && (
        <div className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>

        {/* Email */}

        <div className="mt-8">

          <label className="mb-3 block text-sm font-semibold text-[#173D47]">
            Email Address
          </label>

          <div className="relative">

            <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="kartikey@example.com"
              required
              className="w-full rounded-2xl border border-gray-200 py-4 pl-12 pr-4 outline-none transition focus:border-[#F67D72]"
            />

          </div>

        </div>

        {/* Password */}

        <div className="mt-6">

          <label className="mb-3 block text-sm font-semibold text-[#173D47]">
            Password
          </label>

          <div className="relative">

            <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full rounded-2xl border border-gray-200 py-4 pl-12 pr-12 outline-none transition focus:border-[#F67D72]"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>

          </div>

        </div>

        {/* Remember / Forgot */}

        <div className="mt-6 flex items-center justify-between">

          <label className="flex items-center gap-2 text-sm text-gray-600">

            <input
              type="checkbox"
              className="h-4 w-4 accent-[#F67D72]"
            />

            Remember Me

          </label>

          <button
            type="button"
            className="text-sm font-medium text-[#F67D72] hover:underline"
          >
            Forgot Password?
          </button>

        </div>

        {/* Sign In */}

        <button
          type="submit"
          disabled={loading}
          className="mt-8 w-full rounded-2xl bg-[#F67D72] py-4 text-lg font-semibold text-white transition hover:bg-[#ef6c61] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>

      </form>

      {/* Divider */}

      <div className="my-8 flex items-center">

        <div className="h-px flex-1 bg-gray-200" />

        <span className="px-4 text-sm text-gray-400">
          OR
        </span>

        <div className="h-px flex-1 bg-gray-200" />

      </div>

      {/* Social Buttons */}

      <div className="grid grid-cols-2 gap-4">

        <button
          type="button"
          className="rounded-2xl border border-gray-200 py-4 font-medium transition hover:bg-gray-50"
        >
          Google
        </button>

        <button
          type="button"
          className="rounded-2xl border border-gray-200 py-4 font-medium transition hover:bg-gray-50"
        >
          GitHub
        </button>

      </div>

      {/* Signup */}

      <p className="mt-8 text-center text-gray-500">

        Don't have an account?

        <Link
          to="/signup"
          className="ml-2 font-semibold text-[#F67D72] hover:underline"
        >
          Sign Up
        </Link>

      </p>

    </div>
  );
}

export default LoginForm;