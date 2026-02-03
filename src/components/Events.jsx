import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, PenTool, Gamepad2, Cpu, Mic2, Camera } from 'lucide-react';

const Events = () => {
    const [filter, setFilter] = useState('All');

    const events = [
        { title: "Hackathon 2026", category: "Tech", icon: <Terminal size={24} />, color: "from-cyan-500 to-blue-500" },
        { title: "Robo Wars", category: "Tech", icon: <Cpu size={24} />, color: "from-blue-500 to-indigo-500" },
        { title: "Battle of Bands", category: "Cultural", icon: <Mic2 size={24} />, color: "from-purple-500 to-pink-500" },
        { title: "Digital Art", category: "Cultural", icon: <PenTool size={24} />, color: "from-pink-500 to-rose-500" },
        { title: "Valorant Tournament", category: "Fun", icon: <Gamepad2 size={24} />, color: "from-red-500 to-orange-500" },
        { title: "Photography", category: "Cultural", icon: <Camera size={24} />, color: "from-indigo-500 to-purple-500" },
    ];

    const filteredEvents = filter === 'All' ? events : events.filter(e => e.category === filter);

    return (
        <section id="events" className="py-20 bg-black relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
                        Featured <span className="text-cyan-400">Events</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        {['All', 'Tech', 'Cultural', 'Fun'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full border transition-all duration-300 ${filter === cat
                                        ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredEvents.map((event, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={event.title}
                                className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer"
                            >
                                {/* Card Background with Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                                <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-white/30 transition-colors duration-300" />

                                <div className="absolute inset-0 backdrop-blur-sm p-6 flex flex-col justify-end">
                                    <div className={`mb-auto w-12 h-12 rounded-lg bg-gradient-to-br ${event.color} flex items-center justify-center text-white shadow-lg`}>
                                        {event.icon}
                                    </div>

                                    <div>
                                        <span className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-2 block">{event.category}</span>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">{event.title}</h3>
                                    </div>

                                    {/* Hover content */}
                                    <div className="absolute right-6 bottom-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                        <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white">
                                            →
                                        </span>
                                    </div>
                                </div>

                                {/* Glow Effect */}
                                <div className={`absolute -inset-1 bg-gradient-to-r ${event.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10`} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="mt-12 text-center">
                    <button className="text-gray-400 hover:text-white border-b border-transparent hover:border-white transition-all pb-1">
                        View All Events →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Events;
