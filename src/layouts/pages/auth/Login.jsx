import React, { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import loginAnimation from "../../../assets/login-animation-lottie.json"; // adjust path as needed

const Login = () => {
  const [hasError, setHasError] = useState(false);
  const [shakeKey, setShakeKey] = useState(0);

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy validation
    const isValid = false;

    if (!isValid) {
      setHasError(true);
      setShakeKey(prev => prev + 1); // re-trigger animation
    } else {
      setHasError(false);
      // Redirect to dashboard, etc.
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-indigo-100 to-indigo-300">
      
      {/* Left: Lottie Animation */}
      <div className="hidden md:flex w-full md:w-1/2 items-center justify-center p-4">
        <Lottie
          animationData={loginAnimation}
          loop={true}
          className="w-full max-w-lg"
        />
      </div>

      {/* Right: Login Form */}
      <motion.div
        key={shakeKey}
        initial={{ x: 0 }}
        animate={hasError ? { x: [0, -10, 10, -10, 10, 0] } : { x: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full md:w-1/2 max-w-md bg-white p-10 rounded-2xl shadow-xl m-4"
      >
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 bg-indigo-600 rounded-full animate-bounce shadow-lg flex items-center justify-center text-white text-2xl font-bold">
            🔒
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          Sign in to FactoryPulse
        </h2>

        {hasError && (
          <div className="text-red-600 text-sm text-center mb-4">
            Invalid username or password
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-500">
          © 2025 FactoryPulse. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
