import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import PageTransition from '../../components/PageTransition';
import { motion } from 'framer-motion';
import DashboardLayout from '../../layouts/DashboardLayout';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <PageTransition>
        {/* <DashboardLayout>

        </DashboardLayout> */}
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-indigo-700">
            Welcome, {user?.UserName || 'User'} 🎉
          </h1>
          <p className="text-gray-600 mt-1">
            Here’s what’s happening in your factory today.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Production</h2>
            <p className="text-gray-600">View real-time production stats.</p>
            <button className="mt-4 text-indigo-600 font-medium hover:underline">View</button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Reports</h2>
            <p className="text-gray-600">Generate and view reports.</p>
            <button className="mt-4 text-indigo-600 font-medium hover:underline">Explore</button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Users</h2>
            <p className="text-gray-600">Manage access and roles.</p>
            <button className="mt-4 text-indigo-600 font-medium hover:underline">Manage</button>
          </motion.div>
        </div>

        
      </div>
    </PageTransition>
  );
};

export default Dashboard;
