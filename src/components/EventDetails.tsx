import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Users, Trophy, AlertCircle, Info, Music, Bot, Code2, Cpu, FileText, Gamepad2, Gavel, HelpCircle, Image, Layers, Lightbulb, MessageSquare, Mic2, Palette, PenTool, Radio, Shirt, Skull, Smile, Smartphone, Swords, Terminal, Video, Zap, Activity, BrainCircuit, Bug, MonitorPlay, MousePointer2 } from 'lucide-react';
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

    // Helper to extract "Per College" limit from rules
    const perCollegeRule = event.rules?.find(r => r.toLowerCase().includes('participants per college') || r.toLowerCase().includes('teams per college')) || 'See details';
    const otherRules = event.rules?.filter(r => !r.toLowerCase().includes('participants per college') && !r.toLowerCase().includes('teams per college')) || [];

    // Sort rules: "Number of participants" first if exists in otherRules
    otherRules.sort((a, b) => {
        if (a.toLowerCase().includes('number of participants')) return -1;
        return 0;
    });

    const participantCountRule = otherRules.find(r => r.toLowerCase().includes('number of participants')) || event.teamSize || 'See rules';
    const displayRules = otherRules.filter(r => r !== participantCountRule);

    return (
        <div className="min-h-screen bg-[#050510] text-white p-4 md:p-8 relative overflow-hidden font-sans">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Events</span>
                </Link>

                {/* Header */}
                <div className="flex items-start md:items-center gap-6 mb-12">
                    <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${event.color} flex items-center justify-center shadow-lg shadow-purple-500/20 shrink-0`}>
                        {event.icon}
                    </div>
                    <div>
                        <span className="text-purple-400 font-bold uppercase tracking-widest text-sm md:text-base mb-2 block">{event.day} Event</span>
                        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-none">{event.title}</h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column (Participant Info & Format) */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Participants Card */}
                        <div className="bg-[#0f1020]/80 backdrop-blur-md border border-white/5 rounded-3xl p-6 shadow-xl">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                                    <Users size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-purple-400">Participants</h3>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Per Participation</p>
                                    <div className="flex items-baseline gap-2">
                                        <p className="text-white font-bold text-lg leading-tight">
                                            {participantCountRule.replace(/Number of participants[:\s]*/i, '').replace(/per team[:\s]*/i, '')}
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full h-px bg-white/5"></div>
                                <div>
                                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Per College</p>
                                    <p className="text-white font-bold text-lg leading-tight">
                                        {perCollegeRule.replace(/Number of (teams|participants) per college[:\s]*/i, '')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Event Format Card */}
                        <div className="bg-[#0f1020]/80 backdrop-blur-md border border-amber-500/10 rounded-3xl p-6 shadow-xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="flex items-center gap-3 mb-4 relative z-10">
                                <div className="p-2 bg-amber-500/10 rounded-full text-amber-400">
                                    <Info size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-amber-400">Event Format</h3>
                            </div>
                            <div className="space-y-4 relative z-10">
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {event.description.join('. ')}.
                                </p>
                                {event.duration && (
                                    <p className="text-amber-200/80 text-sm font-medium">
                                        <span className="text-amber-500 font-bold">Duration:</span> {event.duration}
                                    </p>
                                )}

                            </div>
                        </div>
                    </div>

                    {/* Right Column (Rules) */}
                    <div className="lg:col-span-8 flex flex-col h-full">
                        <div className="bg-[#0f1020]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 shadow-xl flex-grow">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                                    <Layers size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-purple-400">Rules & Regulations</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {displayRules.map((rule, idx) => {
                                    const isWarning = rule.toLowerCase().startsWith('prohibited:') || rule.toLowerCase().includes('disqualif') || rule.toLowerCase().includes('vulgar');

                                    if (isWarning) return null; // Skip warnings to show them separately below

                                    return (
                                        <div key={idx} className="bg-[#15162a] rounded-xl p-5 border border-white/5 hover:border-purple-500/30 transition-colors flex gap-4 group">
                                            <span className="flex-shrink-0 w-8 h-8 bg-purple-500/10 group-hover:bg-purple-500/20 text-purple-400 rounded-lg flex items-center justify-center font-bold text-sm transition-colors">
                                                {idx + 1}
                                            </span>
                                            <p className="text-gray-300 text-sm leading-relaxed">{rule}</p>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Warning Section */}
                            <div className="mt-8 space-y-3">
                                {displayRules.filter(r => r.toLowerCase().startsWith('prohibited:') || r.toLowerCase().includes('disqualif') || r.toLowerCase().includes('vulgar')).map((warning, idx) => (
                                    <div key={idx} className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex gap-4 items-start">
                                        <AlertCircle className="text-red-400 shrink-0 mt-0.5" size={20} />
                                        <p className="text-red-200/90 text-sm font-medium">{warning}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Register Button */}
                        <div className="mt-8 flex justify-end">
                            <button
                                onClick={() => window.open('https://forms.gle/tyJKwbgkx3mgu8VU6', '_blank')}
                                className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-lg rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-wider flex items-center justify-center gap-2"
                            >
                                Register for {event.title}
                                <ArrowLeft className="rotate-180" size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
