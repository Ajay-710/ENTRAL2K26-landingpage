import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
    const schedule = [
        {
            day: "Grand Launch",
            date: "February 06, 2026 (3:00 PM)",
            events: "Organised by Yuva Club & Student Forum. Features Chenda Melam, Silambam, and Flash Mob performances at College Ground."
        },
        {
            day: "Day 1 - Main Fest",
            date: "March 12, 2026",
            events: "Inauguration, National-level Hackathon, Technical Workshops, and Cultural Prelims."
        },
        {
            day: "Day 2 - Main Fest",
            date: "March 13, 2026",
            events: "Robo Wars, Grand Finale Culturals, Celebrity Guest Performance, and Prize Distribution."
        }
    ];

    return (
        <section id="timeline" className="py-20 bg-[#050510]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
                        Event <span className="text-purple-500">Timeline</span>
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-30"></div>

                    <div className="space-y-12">
                        {schedule.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="flex-1 w-full md:w-1/2 p-4">
                                    <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:border-cyan-500/50 transition-colors ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <h3 className="text-2xl font-bold text-cyan-400 mb-2">{item.day}</h3>
                                        <p className="text-gray-400 text-sm mb-4">{item.date}</p>
                                        <p className="text-white text-lg">{item.events}</p>
                                    </div>
                                </div>

                                {/* Dot */}
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#050510] border-2 border-purple-500 flex items-center justify-center z-10">
                                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                                </div>

                                <div className="flex-1 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
