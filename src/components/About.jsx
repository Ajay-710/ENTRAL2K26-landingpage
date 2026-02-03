import React from 'react';
import { motion } from 'framer-motion';
import { Code, Music, Rocket } from 'lucide-react';

const About = () => {
    const cards = [
        {
            title: "Tech Events",
            icon: <Code size={40} className="text-cyan-400" />,
            desc: "Showcase your coding skills, robotic prowess, and technical innovation in our national-level hackathons and contests.",
            color: "border-cyan-500/30 hover:border-cyan-500"
        },
        {
            title: "Cultural Extravaganza",
            icon: <Music size={40} className="text-purple-400" />,
            desc: "Dance, music, drama, and fashion. Unleash your creativity and talent on the grandest stage of them all.",
            color: "border-purple-500/30 hover:border-purple-500"
        },
        {
            title: "Workshops & Pro Shows",
            icon: <Rocket size={40} className="text-pink-400" />,
            desc: "Learn from industry experts in hands-on workshops and witness electrifying performances by celebrity artists.",
            color: "border-pink-500/30 hover:border-pink-500"
        }
    ];

    return (
        <section id="about" className="py-20 relative bg-[#050510]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">ENTRAL</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
                        ENTRAL 2K26 is the ultimate convergence of technology, culture, and innovation.
                        A three-day national level symposium that brings together the brightest minds to compete,
                        learn, and celebrate the spirit of engineering and arts.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className={`p-8 rounded-2xl bg-white/5 backdrop-blur-sm border ${card.color} transition-all duration-300 group`}
                        >
                            <div className="mb-6 p-4 rounded-full bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
                                {card.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">{card.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {card.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
