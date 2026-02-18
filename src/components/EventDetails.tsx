
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Users, Trophy, AlertCircle, CheckCircle2 } from 'lucide-react';
import { events } from '../data/events';

const EventDetails = () => {
    const { id } = useParams<{ id: string }>();
    const event = events.find(e => e.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!event) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">Event Not Found</h2>
                    <Link to="/" className="text-cyan-400 hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#050510] text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
                <Link to="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-orbitron tracking-widest uppercase text-sm">Back to Events</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column: Image & Quick Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 shadow-2xl shadow-cyan-500/10 group">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                            <div className="absolute bottom-6 left-6 right-6">
                                <div className={`inline-block px-4 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-3`}>
                                    {event.category}
                                </div>
                                <h1 className="text-4xl md:text-5xl font-orbitron font-black text-white mb-2 leading-tight">
                                    {event.title}
                                </h1>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {event.teamSize && (
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4">
                                    <div className="p-3 rounded-full bg-cyan-500/20 text-cyan-400">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs uppercase tracking-wider">Team Size</p>
                                        <p className="font-bold text-white">{event.teamSize}</p>
                                    </div>
                                </div>
                            )}
                            {event.duration && (
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4">
                                    <div className="p-3 rounded-full bg-purple-500/20 text-purple-400">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs uppercase tracking-wider">Duration</p>
                                        <p className="font-bold text-white">{event.duration}</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {event.prizes && (
                            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Trophy size={100} />
                                </div>
                                <h3 className="text-xl font-orbitron font-bold text-yellow-400 mb-4 flex items-center gap-2">
                                    <Trophy size={20} />
                                    Prizes
                                </h3>
                                <div className="space-y-2">
                                    {event.prizes.map((prize, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-gray-300">
                                            <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-xs font-bold text-yellow-500">
                                                {idx + 1}
                                            </div>
                                            {prize}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* Right Column: Rules & Register */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {event.rules && (
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                                <h3 className="text-2xl font-orbitron font-bold text-white mb-6 flex items-center gap-3">
                                    <AlertCircle size={24} className="text-cyan-400" />
                                    Rules & Regulations
                                </h3>
                                <ul className="space-y-4">
                                    {event.rules.map((rule, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-gray-300 leading-relaxed group">
                                            <CheckCircle2 size={20} className="text-cyan-500/50 mt-1 shrink-0 group-hover:text-cyan-400 transition-colors" />
                                            <span>{rule}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-3xl p-8 text-center space-y-6">
                            <h3 className="text-2xl font-orbitron font-bold text-white">Ready to Participate?</h3>
                            <p className="text-gray-400">Join us for this exciting event and showcase your skills!</p>

                            {/* Assuming the main Registration component is reachable or we just link to a form */}
                            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg uppercase tracking-widest shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all">
                                Register Now
                            </button>
                            <p className="text-xs text-gray-500">
                                *Registration closes soon. Make sure to read all rules.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
