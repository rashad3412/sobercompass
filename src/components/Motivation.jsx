import React, { useState, useEffect } from "react";

const Motivation = () => {
  const quotes = [
    "The best way out is always through.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Keep going. Everything you need will come to you at the perfect time.",
    "The only way to do great work is to love what you do.",
    "The journey of a thousand miles begins with one step.",
    "Believe you can and you're halfway there.",
    "It always seems impossible until it's done.",
    "Your potential is endless.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Don't watch the clock; do what it does. Keep going.",
  ];

  const [quote, setQuote] = useState("");

  useEffect(() => {
    // Select a random quote from the array when the component mounts
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []); // Empty array ensures it runs once when the component mounts

  return (
    <div>
      {/* Motivation Section */}
      <div className="bg-teal text-cream rounded-2xl p-8 shadow-xl transform hover:scale-[1.01] transition-transform font-montserrat">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">🔥 On Fire Streak 🔥</h2>
          <p className="text-lg mb-4">"{quote}"</p>
        </div>
      </div>
    </div>
  );
};

export default Motivation;
