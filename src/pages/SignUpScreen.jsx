import React from "react";
import { Link } from "react-router-dom";

const SignUpScreen = () => {
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

        <form className="space-y-6">
          <div className="space-y-4">
            <div>
              <label
                className="block text-gray text-sm font-medium mb-2 font-roboto
              "
              >
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/30 transition"
                placeholder="John Doe"
              />
            </div>

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

          <button className="w-full bg-teal text-cream py-4 px-6 rounded-xl font-bold text-lg tracking-wide hover:bg-teal-dark transition-colors shadow-lg font-poppins ">
            Create Account
          </button>
        </form>

        <p className="text-center mt-8 text-gray font-roboto">
          Already have an account?{" "}
          <Link to="/login" className="text-teal font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUpScreen;
