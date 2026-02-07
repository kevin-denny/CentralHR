import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Resources', path: '/resources' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="navbar">
            <div className="container" style={{ width: '100%' }}>
                <div className="flex justify-between items-center" style={{ height: '5rem' }}>
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2">
                            <img src="/logo.png" alt="Central HR Logo" className="h-10 w-auto" />
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>Central HR</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center" style={{ gap: '2rem' }}>
                        <style>{`
                            @media (max-width: 768px) {
                                .md\\:flex { display: none !important; }
                                .md\\:hidden { display: flex !important; }
                            }
                            @media (min-width: 769px) {
                                .md\\:hidden { display: none !important; }
                                .md\\:flex { display: flex !important; }
                            }
                        `}</style>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="nav-link"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button variant="primary" to="/contact">Get Started</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-primary"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mobile-menu">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="mobile-nav-link"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div style={{ paddingTop: '1rem' }}>
                        <Button variant="primary" to="/contact" style={{ width: '100%' }} onClick={() => setIsOpen(false)}>
                            Get Started
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
