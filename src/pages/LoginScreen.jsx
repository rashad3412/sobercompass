import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!formData.email || !formData.password) {
      setError("Please fill out all fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        localStorage.setItem("token", data.token);
        console.log("Login successful:", data);
        navigate("/dashboard");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setLoading(false);
      setError("Something went wrong. Please try again.");
    }
  };

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

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

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

          <button
            className="w-full bg-teal text-cream py-4 px-6 rounded-xl font-bold text-lg tracking-wide hover:bg-teal-dark transition-colors shadow-lg font-poppins"
            disabled={loading}
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>

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
