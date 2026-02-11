import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Youtube, Music2 } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <h3 className="mb-0 text-white">Central HR</h3>
                        </div>
                        <p className="mb-4" style={{ opacity: 0.9 }}>
                            Professional HR consulting focused on delivering expertise, compliance, and talent development.
                        </p>
                        <div className="flex" style={{ gap: '1rem' }}>
                            <a href="https://web.facebook.com/profile.php?id=61573079602119" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
                            <a href="https://www.linkedin.com/in/shashi-jayawardena/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Linkedin size={20} /></a>
                            <a href="https://www.instagram.com/servicesensei" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
                            <a href="https://www.youtube.com/@servicesensei-ss" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Youtube size={20} /></a>
                            <a href="https://www.tiktok.com/@servicesensei" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" title="TikTok"><Music2 size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 text-accent">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-white hover:text-accent transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-white hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="text-white hover:text-accent transition-colors">Services</Link></li>
                            <li><Link href="/resources" className="text-white hover:text-accent transition-colors">Resources</Link></li>
                            <li><Link href="/contact" className="text-white hover:text-accent transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="mb-4 text-accent">Services</h4>
                        <ul className="space-y-2">
                            <li><Link href="/services" className="text-white hover:text-accent transition-colors">HR Consulting</Link></li>
                            <li><Link href="/services" className="text-white hover:text-accent transition-colors">Talent Acquisition</Link></li>
                            <li><Link href="/services" className="text-white hover:text-accent transition-colors">Compliance & Risk</Link></li>
                            <li><Link href="/services" className="text-white hover:text-accent transition-colors">Training & Development</Link></li>
                            <li><Link href="/services" className="text-white hover:text-accent transition-colors">Payroll Support</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-4 text-accent">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin size={20} className="mr-2 mt-1 text-accent" />
                                <span className="" style={{ opacity: 0.9 }}>123 Business Avenue, Suite 100<br />New York, NY 10001</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={20} className="mr-2 text-accent" />
                                <span className="" style={{ opacity: 0.9 }}>+94 77 743 1596</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={20} className="mr-2 text-accent" />
                                <a href="mailto:hello@centralhrsolutions.com" className="hover:text-accent transition-colors" style={{ opacity: 0.9 }}>hello@centralhrsolutions.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t pt-8 text-center text-sm" style={{ borderColor: 'rgba(255,255,255,0.1)', opacity: 0.7 }}>
                    <p>&copy; {currentYear} Central HR Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
