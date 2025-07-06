import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'backdrop-blur bg-white/70 shadow-md'
                    : 'bg-white'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-indigo-600">
                    <Link to="/">FactoryPulse</Link>
                </h1>
                <nav className="space-x-4 hidden md:flex">
                    <a href="#features" className="text-gray-600 hover:text-indigo-600">
                        Features
                    </a>
                    <a href="#contact" className="text-gray-600 hover:text-indigo-600">
                        Register
                    </a>
                    <Link to="/auth/login" className="text-gray-600 font-semibold hover:underline">
                        Login
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
