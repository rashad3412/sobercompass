import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: "sumner5@gmail.com", // Auto-filled email
    password: "jas12", // Auto-filled password
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Mobile detection function (kept as-is)
  // const isMobileDevice = () => {
  //   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  //     navigator.userAgent
  //   );
  // };

  // Handle input changes (kept as-is)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Modified handleSubmit to bypass backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Client-side validation only
    if (!formData.email || !formData.password) {
      setError("Please fill out all fields.");
      setLoading(false);
      return;
    }

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Auto-login if using the specified credentials
    if (
      formData.email === "sumner5@gmail.com" &&
      formData.password === "jas12"
    ) {
      localStorage.setItem("token", "dummy_token_for_testing");
      console.log("Auto-login successful with test credentials");
      navigate("/homescreen");
    } else {
      setError("Invalid credentials. Use sumner5@gmail.com / jas12");
    }

    setLoading(false);
  };

  // Your exact same UI return statement below
  return (
    <section className="min-h-screen bg-teal flex items-center justify-center p-6 relative overflow-hidden">
      <div className="bg-cream rounded-2xl shadow-xl p-8 md:p-12 w-full max-w-md z-10">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-teal mb-2 font-roboto">
            Welcome Back!
          </h1>
          <p className="text-gray text:md md:text-xl font-light font-montserrat">
            Login to your sobercompass account
          </p>
        </header>

        {/* Display error message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Login Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-gray text-sm font-medium mb-2 font-roboto">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/30 transition"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-gray text-sm font-medium mb-2 font-roboto">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/30 transition"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-teal text-cream py-4 px-6 rounded-xl font-bold text-lg tracking-wide hover:bg-teal-dark transition-colors shadow-lg font-poppins"
            disabled={loading}
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>

        {/* Sign-up Link */}
        <p className="text-center mt-8 text-gray font-roboto">
          Don't have an account?{" "}
          <Link to="/signup" className="text-teal font-medium hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginScreen;
