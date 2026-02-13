import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Users, Gift } from 'lucide-react';

const Highlights = () => {
    const stats = [
        { icon: <Users size={32} />, value: "3000+", label: "Participants" },
        { icon: <Trophy size={32} />, value: "40+", label: "Events" },
        { icon: <Gift size={32} />, value: "₹5 Lakhs", label: "Prize Pool" },
        { icon: <Star size={32} />, value: "3", label: "Pro Shows" }, // Typo intentional? Probably "Pro Shows"
    ];

    return (
        <section id="highlights" className="py-20 relative bg-[#050510]">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-[#050510]"></div>
                {/* Placeholder for an image, using a pattern or gradient for now */}
                <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-[#050510] to-[#050510]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-12">
                        Why <span className="text-pink-500">Attend?</span>
                    </h2>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, type: "spring" }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-pink-500/50 transition-all duration-300 group"
                            >
                                <div className="mb-4 flex justify-center text-pink-400 group-hover:text-pink-300 transition-colors">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-gray-400 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Highlights;
