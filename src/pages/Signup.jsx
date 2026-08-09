import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
} from "lucide-react";
import { useState } from "react";
import axios from "axios";

import logo from "../assets/logo.png";

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
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

      // Save JWT
      localStorage.setItem("token", response.data.token);

      // Save user information
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      // Go to dashboard
      navigate("/dashboard");

    } catch (error) {
      setError(
        error.response?.data?.message ||
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#F8FCFD] px-6 py-12">

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
            Create Account
          </h1>

          <p className="mt-2 text-gray-500">
            Start your personalized recovery journey
          </p>

        </div>

        {/* Error */}

        {error && (
          <div className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          {/* Full Name */}

          <div className="mt-8">

            <label className="mb-3 block text-sm font-semibold text-[#173D47]">
              Full Name
            </label>

            <div className="relative">

              <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full rounded-2xl border border-gray-200 py-4 pl-12 pr-4 outline-none transition focus:border-[#F67D72]"
              />

            </div>

          </div>

          {/* Email */}

          <div className="mt-6">

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
                placeholder="Create a password"
                required
                minLength={6}
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

          {/* Create Account */}

          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-full rounded-2xl bg-[#F67D72] py-4 text-lg font-semibold text-white transition hover:bg-[#ef6c61] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        {/* Login */}

        <p className="mt-8 text-center text-gray-500">

          Already have an account?

          <Link
            to="/login"
            className="ml-2 font-semibold text-[#F67D72] hover:underline"
          >
            Sign In
          </Link>

        </p>

      </div>

    </section>
  );
}

export default Signup;