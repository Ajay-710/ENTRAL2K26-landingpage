import React from 'react';
import { motion } from 'framer-motion';
import { Code, Music, Rocket } from 'lucide-react';

const About = () => {
    const cards = [
        {
            title: "Tech Events",
            icon: <Code size={32} className="text-cyan-400" />,
            desc: "Hackathons, Coding Contests, and Hardware challenges. Prove your technical mettle.",
            color: "border-cyan-500/20 group-hover:border-cyan-400"
        },
        {
            title: "Cultural Shows",
            icon: <Music size={32} className="text-purple-400" />,
            desc: "The grand stage for music, dance, and fashion. Artistic expression at its peak.",
            color: "border-purple-500/20 group-hover:border-purple-400"
        },
        {
            title: "Pro Workshops",
            icon: <Rocket size={32} className="text-pink-400" />,
            desc: "Intensive sessions led by industry pioneers. Level up your skill set.",
            color: "border-pink-500/20 group-hover:border-pink-400"
        }
    ];

    return (
        <section id="about" className="py-32 relative bg-[#050510] border-y border-white/5">
            {/* Geometric Background Detail */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.05),transparent)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-2/3"
                    >
                        <h2 className="text-5xl md:text-7xl font-orbitron font-black text-white mb-8 tracking-tighter">
                            THE SPIRIT <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">OF ALPHA TECH</span>
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl uppercase tracking-wider">
                            ENTRAL 2K26 is the premier technical and cultural showcase of Alpha College of Engineering, collaboratively launched by the Yuva Club and Student Forum to celebrate unity, innovation, and tradition.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-end gap-2 text-cyan-400 font-bold tracking-widest text-xs uppercase"
                    >
                        <span>Organised By</span>
                        <span className="text-white text-base">Yuva Club & Student Forum</span>
                        <div className="h-[1px] w-20 bg-cyan-500 mt-2"></div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className={`relative p-10 rounded-[2rem] bg-[#0c0c1e] border ${card.color} transition-all duration-500 group overflow-hidden`}
                        >
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-3xl"></div>

                            <div className="relative z-10">
                                <div className="mb-8 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-500">
                                    {card.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 font-orbitron tracking-tight uppercase">{card.title}</h3>
                                <p className="text-gray-400 leading-relaxed font-medium">
                                    {card.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
