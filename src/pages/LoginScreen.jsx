import React from "react";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <section className="min-h-screen bg-teal flex items-center justify-center p-6 relative overflow-hidden">
      {/* Core Value Decorations */}
      {["Anchor", "Awaken", "Navigate", "Renew", "Thrive"].map(
        (word, index) => (
          <span
            key={word}
            className="absolute opacity-10 text-teal font-bold text-xl md:text-3xl pointer-events-none"
            style={{
              top: `${15 + index * 18}%`,
              left: index % 2 === 0 ? "3%" : "87%",
              transform: `rotate(${index % 2 === 0 ? "-8deg" : "12deg"})`,
            }}
          >
            {word}
          </span>
        )
      )}

      <div className="bg-cream rounded-2xl shadow-xl p-8 md:p-12 w-full max-w-md z-10">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-teal mb-2 font-roboto">
            Welcome Back
          </h1>
          <p className="text-gray text-md md:text-xl font-light font-montserrat">
            Continue Your sobercompass Journey
          </p>
        </header>

        <form className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-gray text-sm font-medium mb-2 font-roboto">
                Email Address
              </label>
              <input
                type="email"
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
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/30 transition"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 border-gray-300 rounded text-teal focus:ring-teal"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-sm text-gray font-roboto"
              >
                Remember Me
              </label>
            </div>
            <Link
              to="/forgot-password"
              className="text-sm text-teal hover:underline font-roboto"
            >
              Forgot Password?
            </Link>
          </div>

          <button className="w-full bg-teal text-cream py-4 px-6 rounded-xl font-bold hover:bg-teal-dark transition-colors shadow-lg font-poppins text-lg tracking-wide">
            Login
          </button>
        </form>

        <p className="text-center mt-8 text-gray font-roboto">
          No Account?{" "}
          <Link to="/signup" className="text-teal font-medium hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginScreen;
