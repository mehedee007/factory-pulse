import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div>
            {/* Footer */}
            <footer className="bg-gray-900 text-white py-6 text-center text-sm">
                © {year} Naturub. All rights reserved.
            </footer>
        </div>
    );
};

export default Footer;