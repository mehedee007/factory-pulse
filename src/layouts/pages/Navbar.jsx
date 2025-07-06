import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            {/* Header */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-indigo-600"><a href="/">FactoryPulse</a></h1>
                <nav className="space-x-4 hidden md:flex">
                    <a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a>
                    <a href="#contact" className="text-gray-600 hover:text-indigo-600">Register</a>
                    <Link to={`/auth/login`} className="text-gray-600 font-semibold hover:underline">Login</Link>
                </nav>
                </div>
            </header>
        </div>
    );
};

export default Navbar;