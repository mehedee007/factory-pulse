import React, { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/login-animation-lottie.json"; // adjust path as needed
import { login as loginApi } from '../../api/authApi';
import { useAuth } from '../../hooks/useAuth';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import PageTransition from "../../components/PageTransition";
const Login = () => {

  const [formData, setFormData] = useState({ username: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [shakeKey, setShakeKey] = useState(0);
  const [hasError, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      console.log(formData);
      const { jwtToken } = await loginApi(formData);
      const decode = jwtDecode(jwtToken);
      login(decode, jwtToken);
      navigate('/dashboard');

    } catch (err) {
      console.error(err);
      setError(true);
      alert('Invalid credentials');
      setShakeKey(prev => prev + 1); // re-trigger animation
    }
  };




  return (
    <PageTransition>
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

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Username</label>
              <input
                type="text"
                name="UserName"
                value={formData.UserName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your UserName"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                name="Password"
                value={formData.Password}
                onChange={handleChange}
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

        </motion.div>
      </div>
    </PageTransition>

  );
};

export default Login;
