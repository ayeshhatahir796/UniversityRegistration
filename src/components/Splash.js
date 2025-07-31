import React from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/register");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-600 text-white flex-col">
      <h1 className="text-4xl font-bold mb-6 animate-bounce">🎓 Welcome to University Registration</h1>
      <button
        onClick={handleStart}
        className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg hover:bg-gray-100 transition"
      >
        Start Registration
      </button>
    </div>
  );
};

export default Splash;
