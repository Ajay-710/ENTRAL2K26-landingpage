import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { events } from '../data/events';

const Events = () => {
    const [activeDay, setActiveDay] = useState<'Day 1' | 'Day 2' | 'Online'>('Day 1');
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredEvents = events.filter(e => {
        const matchesDay = e.day === activeDay;
        const matchesCategory = activeCategory === 'All' || e.category === activeCategory;
        return matchesDay && matchesCategory;
    }).sort((a, b) => a.title.localeCompare(b.title));

    const categories = ['All', ...Array.from(new Set(events.filter(e => e.day === activeDay).map(e => e.category)))];

    return (
        <section id="events" className="py-24 bg-black relative overflow-hidden min-h-screen">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-6xl md:text-8xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-6 tracking-tighter uppercase">
                        Event <span className="text-cyan-400">Lineup</span>
                    </h2>

                    {/* Day Toggle */}
                    <div className="flex justify-center gap-6 mb-12">
                        {(['Day 1', 'Day 2', 'Online'] as const).map((day) => (
                            <button
                                key={day}
                                onClick={() => { setActiveDay(day); setActiveCategory('All'); }}
                                className={`px-10 py-4 rounded-xl text-xl font-bold tracking-widest uppercase transition-all duration-300 transform ${activeDay === day
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_30px_rgba(6,182,212,0.5)] scale-105'
                                    : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {day}
                            </button>
                        ))}
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3">

                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 border ${activeCategory === cat
                                    ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                                    : 'bg-transparent border-white/20 text-gray-400 hover:border-white/50 hover:text-white'
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
                    <AnimatePresence mode="popLayout">
                        {filteredEvents.map((event) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={event.id}
                                className="group relative h-[400px] rounded-[2rem] overflow-hidden bg-gray-900/40 border border-white/5 hover:border-cyan-500/50 transition-all duration-500"
                            >
                                {/* Image Background */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 grayscale-[30%] group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                                    <div className="flex justify-between items-start">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${event.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            {event.icon}
                                        </div>
                                        <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] font-bold tracking-wider text-cyan-300 uppercase backdrop-blur-md">
                                            {event.category}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-orbitron font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                            {event.title}
                                        </h3>
                                        <div className="space-y-1 mb-4">
                                            {event.description.map((desc, i) => (
                                                <p key={i} className="text-gray-400 text-xs font-medium flex items-center gap-2">
                                                    <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                                                    {desc}
                                                </p>
                                            ))}
                                        </div>
                                        <div className="pt-4 border-t border-white/10 flex items-center justify-end">
                                            <Link
                                                to={`/events/${event.id}`}
                                                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all group-hover:bg-cyan-500 group-hover:text-black"
                                            >
                                                <ArrowUpRight size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredEvents.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 font-orbitron text-xl">No events found in this category.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Events;
