import React from 'react';
import { Instagram, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-black border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
            {/* Neon Divider Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_10px_#00f3ff]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div>
                        <h2 className="text-3xl font-orbitron font-bold text-white mb-4">
                            ENTHRAL<span className="text-cyan-400">2K26</span>
                        </h2>
                        <p className="text-gray-400 mb-6 uppercase text-sm tracking-wider font-bold">
                            "The Greatest of <span className="text-cyan-400">Alpha</span> Time"
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/enthral.ace/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan-600 transition-all">
                                <Instagram size={20} />
                            </a>

                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Events', 'Timeline', 'Register'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        onClick={(e) => {
                                            if (item === 'Register') {
                                                e.preventDefault();
                                                window.open('https://forms.gle/tyJKwbgkx3mgu8VU6', '_blank');
                                            }
                                        }}
                                        className="text-gray-400 hover:text-cyan-400 transition-colors uppercase text-sm tracking-widest font-bold"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-cyan-500 mt-1 shrink-0" />
                                <span>
                                    Alpha College of Engineering, <br />
                                    College Ground, Tech Hub
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-cyan-500 shrink-0" />
                                <span>enthral.info@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-cyan-500 shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                        </ul>
                    </div>

                    {/* Map Section */}
                    <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 aspect-video md:aspect-auto">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2033')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                        <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                            <MapPin className="text-cyan-400 w-10 h-10 mb-4 animate-bounce" />
                            <h4 className="text-white font-bold mb-2">Event Location</h4>
                            <p className="text-xs text-gray-400 mb-4">Click to find us on Google Maps</p>
                            <a
                                href="https://maps.app.goo.gl/EaqEFaNAsYBdkuBL7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-black font-bold text-sm rounded-full hover:bg-white transition-colors"
                            >
                                Open Maps <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs tracking-tighter uppercase font-bold">
                        © 2026 Alpha College of Engineering. Built with passion for technology.
                    </p>
                    <div className="flex space-x-6 text-xs text-gray-500 uppercase font-bold">
                        <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
