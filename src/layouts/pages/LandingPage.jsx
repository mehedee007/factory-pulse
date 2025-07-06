import React from "react";
import Navbar from "./Navbar";

const LandingPage = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-gray-100 text-gray-800">
      {/*Navigation Section*/}
      <Navbar></Navbar>

      {/* Hero Section */}
      <section className="bg-indigo-50 py-20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-indigo-800">
              One Place to Manage Your Entire Production
            </h2>
            <p className="text-lg mb-6 text-gray-700">
              Streamline all your production sections planning, quality control, and dispatch under one powerful system.
            </p>
            <a
              href="/register"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              Get Started
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://i.ibb.co/HDCZsZDj/production-bg-02.gif"
              alt="Dashboard"
              className="rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-indigo-700 mb-12">Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Role-Based Access",
                description: "Assign access to each department, team, or manager effortlessly."
              },
              {
                title: "Live Dashboard",
                description: "Track live production metrics and performance in real-time."
              },
              {
                title: "Smart Notifications",
                description: "Stay updated on bottlenecks, delays, and quality issues instantly."
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <h4 className="text-xl font-semibold mb-2 text-indigo-800">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Implementations */}
      <section id="contact" className="py-20 bg-indigo-600 text-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-4">Production Sections</h3>
          <p className="mb-6 text-lg">Start your free trial or talk to our team today.</p>

          <a
            href="/register"
            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center text-sm">
        © {year} Naturub. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
