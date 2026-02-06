import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, PenTool, Gamepad2, Cpu, Mic2, Camera } from 'lucide-react';

const Events = () => {
    const [filter, setFilter] = useState('All');

    const events = [
        { title: "Chenda Melam", category: "Cultural", icon: <Mic2 size={24} />, color: "from-orange-600 to-red-600", image: "https://images.unsplash.com/photo-1599570570624-94676646536b?q=80&w=2070" },
        { title: "Silambam", category: "Cultural", icon: <PenTool size={24} />, color: "from-amber-500 to-yellow-600", image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2070" },
        { title: "Hackathon 2026", category: "Tech", icon: <Terminal size={24} />, color: "from-cyan-500 to-blue-500", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070" },
        { title: "Robo Wars", category: "Tech", icon: <Cpu size={24} />, color: "from-blue-500 to-indigo-500", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070" },
        { title: "Battle of Bands", category: "Cultural", icon: <Mic2 size={24} />, color: "from-purple-500 to-pink-500", image: "https://images.unsplash.com/photo-1459749411177-042180ceea73?q=80&w=2070" },
        { title: "Digital Art", category: "Cultural", icon: <PenTool size={24} />, color: "from-pink-500 to-rose-500", image: "https://images.unsplash.com/photo-1547826039-bfc3ec42f682?q=80&w=2000" },
        { title: "Valorant Masters", category: "Fun", icon: <Gamepad2 size={24} />, color: "from-red-500 to-orange-500", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070" },
        { title: "Lense Flare", category: "Cultural", icon: <Camera size={24} />, color: "from-indigo-500 to-purple-500", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2070" },
    ];

    const filteredEvents = filter === 'All' ? events : events.filter(e => e.category === filter);

    return (
        <section id="events" className="py-32 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-24"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-7xl font-orbitron font-black text-white mb-10 tracking-tighter uppercase">
                        Experience <span className="text-cyan-400">The Core</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-3 mt-12">
                        {['All', 'Tech', 'Cultural', 'Fun'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-8 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 border ${filter === cat
                                    ? 'bg-cyan-500 border-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                                    : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredEvents.map((event) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                key={event.title}
                                className="group relative h-[450px] rounded-[2.5rem] overflow-hidden cursor-pointer"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                                </div>

                                <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${event.color} flex items-center justify-center text-white shadow-2xl transform transition-transform group-hover:rotate-12`}>
                                        {event.icon}
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="w-8 h-[1px] bg-cyan-500"></span>
                                            <span className="text-[10px] font-black tracking-[.3em] text-cyan-400 uppercase">{event.category}</span>
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-orbitron font-black text-white group-hover:text-cyan-400 transition-colors uppercase leading-none">
                                            {event.title}
                                        </h3>
                                    </div>
                                </div>

                                <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 backdrop-blur-md">
                                    <span className="text-white text-xl">→</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Events;
