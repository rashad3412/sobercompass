import React from "react";
import compass from "../assets/compass.png";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  // use navigation to go to sign up screen
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-cream flex flex-col items-center justify-center p-8 ">
      {/* Header */}
      <h1 className="text-teal text-4xl md:text-6xl  mb-4 text-center  font-bold font-roboto tracking-wide brightness-110">
        Sober Compass
      </h1>

      {/* Subtitle */}
      <p className="text-gray text-lg md:text-2xl font-light mb-8 text-center font-roboto">
        Your Guided Journey to Sustainable Sobriety
      </p>

      {/* Compass Image */}
      <section className="mb-12 transition-transform duration-300 hover:scale-105">
        <img
          src={compass}
          alt="Compass guiding to sobriety"
          className="w-64 md:w-80 drop-shadow-lg"
        />
      </section>

      {/* Description */}
      <p className="text-gray text-lg md:text-xl text-center max-w-2xl mb-12 leading-relaxed font-roboto">
        A compassionate AI companion helping you navigate recovery, build
        resilience, and rediscover life's true direction - one mindful step at a
        time.
      </p>

      {/* Get Started Button */}
      <button
        className="bg-teal text-gray px-8 py-4 rounded-full 
        text-lg md:text-xl font-medium shadow-lg hover:bg-teal-dark 
        transition-colors duration-300 active:scale-95 brightness-110"
        onClick={() => navigate("/signup")}
      >
        Begin Your Journey
      </button>
    </main>
  );
};

export default SplashScreen;
