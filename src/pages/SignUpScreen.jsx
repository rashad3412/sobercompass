import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUpScreen = () => {
  const navigate = useNavigate(); // Initialize navigation

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

    try {
      const response = await fetch("http://localhost:5001/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Sends fullName, email, and password
      });

      // Check if the response is ok (status 200-299)
      if (response.ok) {
        const data = await response.json(); // Get the response data from backend
        console.log("User registered:", data);
        // Optionally, redirect to login page after successful registration
        navigate("/login");
      } else {
        const data = await response.json(); // Get error message from response body
        setError(data.message || "An error occurred during registration");
      }
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setLoading(false);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Stop loading once the request is done
    }
  };

  return (
    <section className="min-h-screen bg-teal flex items-center justify-center p-6 relative overflow-hidden">
      <div className="bg-cream rounded-2xl shadow-xl p-8 md:p-12 w-full max-w-md z-10">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-teal mb-2 font-roboto">
            Start Your Journey
          </h1>
          <p className="text-gray text:md md:text-xl font-light font-montserrat">
            Create Your sobercompass Account
          </p>
        </header>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-gray text-sm font-medium mb-2 font-roboto">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/30 transition"
                placeholder="John Doe"
                required
              />
            </div>

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
                required
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
                required
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button
            type="submit"
            className="w-full py-3 mt-6 text-white bg-teal rounded-lg focus:ring-2 focus:ring-teal/30"
            disabled={loading}
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>

          <p className="text-center text-sm mt-4 text-gray">
            Already have an account?{" "}
            <Link to="/login" className="text-teal underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUpScreen;

// josh miller
// miller1@gmail
// miller12

// hanks@gmail.com
// hanks12

// kash sumner
// kask12@gmail
// kash12

// sumner5@gmail
// jas12
