import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Users, Trophy, AlertCircle, Info, Music, Bot, Code2, Cpu, FileText, Gamepad2, Gavel, HelpCircle, Image, Layers, Lightbulb, MessageSquare, Mic2, Palette, PenTool, Radio, Shirt, Skull, Smile, Smartphone, Swords, Terminal, Video, Zap, Activity, BrainCircuit, Bug, MonitorPlay, MousePointer2, CheckCircle2, Wifi } from 'lucide-react';
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

    const renderWithHighlights = (text: string) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return (
                    <span key={index} className="text-amber-500 font-bold">
                        {part.slice(2, -2)}
                    </span>
                );
            }
            return part;
        });
    };

    // Helper to extract "Per College" limit from rules
    const perCollegeRule = event.rules?.find(r => r.toLowerCase().includes('participants per college') || r.toLowerCase().includes('teams per college') || r.toLowerCase().includes('per college')) || 'See details';
    const otherRules = event.rules?.filter(r => !(r.toLowerCase().includes('participants per college') || r.toLowerCase().includes('teams per college') || r.toLowerCase().includes('per college'))) || [];

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

                        {/* Trophy Announcement Card */}
                        <div className="bg-gradient-to-br from-yellow-500/10 to-amber-600/10 backdrop-blur-md border border-yellow-500/30 rounded-3xl p-6 shadow-[0_0_30px_rgba(234,179,8,0.1)] relative overflow-hidden group">
                            <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="flex items-center gap-3 mb-4 relative z-10">
                                <div className="p-2 bg-yellow-500/20 rounded-xl text-yellow-400">
                                    <Trophy size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-yellow-400 uppercase tracking-wider">Championship</h3>
                            </div>
                            <p className="text-yellow-100/90 text-sm font-medium leading-relaxed relative z-10">
                                An <span className="text-yellow-400 font-bold">Overall Championship Trophy</span> will be awarded based on combined performance across <span className="text-yellow-400 font-bold">both days</span>!
                            </p>
                        </div>

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
                                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">No. of Participants</p>
                                    <div className="flex items-baseline gap-2">
                                        <p className="text-white font-bold text-lg leading-tight">
                                            {participantCountRule.replace(/Number of participants[:\s]*/i, '')}
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full h-px bg-white/5"></div>
                                <div>
                                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Per College</p>
                                    <p className="text-white font-bold text-lg leading-tight">
                                        {perCollegeRule.replace(/Number of (teams|participants) per college[:\s]*/i, '').replace(/(Per College|Teams per College)[:\s]*/i, '')}
                                    </p>
                                </div>
                            </div>

                            {event.note && (
                                <div className="mt-4">
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {event.note}
                                    </p>
                                </div>
                            )}
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
                                {event.description.map((desc, i) => (
                                    <p key={i} className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                                        {renderWithHighlights(desc)}
                                    </p>
                                ))}
                                {event.duration && (
                                    <p className="text-amber-200/80 text-sm font-medium">
                                        <span className="text-amber-500 font-bold">
                                            {event.duration.toLowerCase().startsWith('act time') ? 'Act Time: ' : event.duration.toLowerCase().startsWith('editing time') ? 'Editing Time: ' : event.duration.toLowerCase().startsWith('maximum duration') ? 'Maximum Duration: ' : event.duration.toLowerCase().startsWith('time limit') ? 'Time Limit: ' : 'Duration: '}
                                        </span>
                                        {event.duration.replace(/^Act time\s*/i, '').replace(/^Time Limit\s*/i, '').replace(/^Time limit\s*/i, '').replace(/^duration:?\s*/i, '').replace(/^Editing Time:?\s*/i, '').replace(/^Maximum Duration:?\s*/i, '')}
                                    </p>
                                )}

                            </div>
                        </div>

                        {/* Theme Card */}
                        {event.theme && (
                            <div className="bg-[#0f1020]/80 backdrop-blur-md border border-amber-500/10 rounded-3xl p-6 shadow-xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="flex items-start gap-4 relative z-10">
                                    <div className="text-amber-500 mt-1 shrink-0">
                                        <Palette size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-amber-500 mb-1">Theme</h3>
                                        <p className="text-gray-200 text-sm leading-relaxed">
                                            {event.theme}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
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
                                {(() => {
                                    let ruleNumber = 1;
                                    return displayRules.map((rule, idx) => {
                                        const lowerRule = rule.toLowerCase();
                                        const isWarning = lowerRule.startsWith('prohibited:') || lowerRule.startsWith('strictly prohibited:') || lowerRule.startsWith('warning:') || lowerRule.includes('disqualif') || lowerRule.includes('vulgar');
                                        const isAllowed = lowerRule.startsWith('allowed:') || lowerRule.startsWith('judging criteria:');
                                        const isInternet = lowerRule.startsWith('internet:');

                                        if (isWarning) {
                                            return (
                                                <div key={idx} className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex gap-4 items-start col-span-1 md:col-span-2">
                                                    <AlertCircle className="text-red-400 shrink-0 mt-0.5" size={20} />
                                                    <p className="text-red-200/90 text-sm font-medium leading-relaxed">{renderWithHighlights(rule)}</p>
                                                </div>
                                            );
                                        }

                                        if (isAllowed) {
                                            return (
                                                <div key={idx} className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex gap-4 items-start col-span-1 md:col-span-2">
                                                    <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={20} />
                                                    <p className="text-emerald-200/90 text-sm font-medium leading-relaxed">{renderWithHighlights(rule)}</p>
                                                </div>
                                            );
                                        }

                                        if (isInternet) {
                                            return (
                                                <div key={idx} className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4 flex gap-4 items-start col-span-1 md:col-span-2">
                                                    <Wifi className="text-teal-400 shrink-0 mt-0.5" size={20} />
                                                    <p className="text-teal-200/90 text-sm font-medium leading-relaxed">{renderWithHighlights(rule)}</p>
                                                </div>
                                            );
                                        }

                                        return (
                                            <div key={idx} className="bg-[#15162a] rounded-xl p-5 border border-white/5 hover:border-purple-500/30 transition-colors flex gap-4 group col-span-1 md:col-span-2">
                                                <span className="flex-shrink-0 w-8 h-8 bg-purple-500/10 group-hover:bg-purple-500/20 text-purple-400 rounded-lg flex items-center justify-center font-bold text-sm transition-colors">
                                                    {ruleNumber++}
                                                </span>
                                                <p className="text-gray-300 text-sm leading-relaxed">{renderWithHighlights(rule)}</p>
                                            </div>
                                        );
                                    });
                                })()}
                            </div>
                        </div>

                        {/* Register Button */}
                        <div className="mt-8 flex justify-end">
                            <button
                                onClick={() => window.open('https://forms.gle/tyJKwbgkx3mgu8VU6', '_blank')}
                                className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-lg rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-wider flex items-center justify-center gap-2"
                            >
                                REGISTER NOW
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
