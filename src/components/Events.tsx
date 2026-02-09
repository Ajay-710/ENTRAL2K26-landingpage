import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Terminal, PenTool, Gamepad2, Cpu, Mic2, Camera, Code2, Bug, Layers, Image,
    MessageSquare, Lightbulb, Users, FileText, Zap, Bot, Skull, Music, Shirt,
    Smartphone, Smile, HelpCircle, Palette, Dumbbell, Trophy, Video, MousePointer2,
    MonitorPlay, Gavel, Radio, Swords, BrainCircuit, Activity
} from 'lucide-react';

interface Event {
    id: string;
    title: string;
    category: string;
    day: 'Day 1' | 'Day 2';
    description: string[];
    details: string; // Extra details like team size
    icon: React.ReactNode;
    image: string;
    color: string;
}

const Events = () => {
    const [activeDay, setActiveDay] = useState<'Day 1' | 'Day 2'>('Day 1');
    const [activeCategory, setActiveCategory] = useState('All');

    const events: Event[] = [
        // DAY 1 - TECHNICAL
        {
            id: 'd1-1', title: 'Hackathon', category: 'Technical', day: 'Day 1',
            description: ['AIML / IoT / Healthcare', 'Team: 2-4 members', 'Venue: IT Lab', 'Internet Allowed'],
            details: 'Problem statements announced on spot.',
            icon: <Terminal size={24} />, color: 'from-cyan-500 to-blue-500',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070'
        },
        {
            id: 'd1-2', title: 'Coding Contest', category: 'Technical', day: 'Day 1',
            description: ['Individual Participation', 'Q&A Based', 'No Internet'],
            details: 'Venue: Assigned Room',
            icon: <Code2 size={24} />, color: 'from-blue-500 to-indigo-500',
            image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070'
        },
        {
            id: 'd1-3', title: 'Debugging Contest', category: 'Technical', day: 'Day 1',
            description: ['Individual Participation', 'Find & Fix Errors', 'Time-bound'],
            details: 'Venue: Room 1',
            icon: <Bug size={24} />, color: 'from-red-500 to-pink-600',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070'
        },
        {
            id: 'd1-4', title: 'Code Relay', category: 'Technical', day: 'Day 1',
            description: ['Team: 3-4 members', 'Relay Coding', 'Laptop Mandatory'],
            details: 'Venue: CISCO Lab',
            icon: <Layers size={24} />, color: 'from-violet-500 to-purple-500',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070'
        },
        {
            id: 'd1-6', title: 'Prompting War', category: 'Technical', day: 'Day 1',
            description: ['Web Design via AI', 'Individual/Team', 'No Plagiarism'],
            details: 'Venue: TBD',
            icon: <Bot size={24} />, color: 'from-emerald-400 to-cyan-500',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070'
        },
        {
            id: 'd1-8', title: 'Battle Yarn', category: 'Technical', day: 'Day 1',
            description: ['(Tech Debate)', 'Open to all domains', 'Topics on spot'],
            details: 'Venue: Seminar Hall',
            icon: <MessageSquare size={24} />, color: 'from-orange-500 to-amber-500',
            image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070'
        },
        {
            id: 'd1-9', title: 'Instolutions', category: 'Technical', day: 'Day 1',
            description: ['Team: 2 members', 'Problem Solving', 'Practical Solutions'],
            details: 'Venue: Lab 2',
            icon: <Lightbulb size={24} />, color: 'from-yellow-400 to-orange-500',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070'
        },
        {
            id: 'd1-10', title: 'Protofest', category: 'Technical', day: 'Day 1',
            description: ['(Project Expo)', 'Working Models/Demos', 'Open to all'],
            details: 'Venue: SLC',
            icon: <Cpu size={24} />, color: 'from-blue-400 to-teal-400',
            image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070'
        },
        {
            id: 'd1-11', title: 'Pitch Your Paper', category: 'Technical', day: 'Day 1',
            description: ['(Paper Presentation)', 'Team: Max 4', 'PPT Mandatory'],
            details: 'Venue: CSE Lab',
            icon: <FileText size={24} />, color: 'from-indigo-400 to-cyan-400',
            image: 'https://images.unsplash.com/photo-1544531835-3a99008aaaae?q=80&w=2070'
        },
        {
            id: 'd1-12', title: 'Electro Hunt', category: 'Technical', day: 'Day 1',
            description: ['Team: 2-4 members', 'Clue-based Hunt', 'Technical'],
            details: 'Venue: Campus',
            icon: <Zap size={24} />, color: 'from-yellow-500 to-red-500',
            image: 'https://images.unsplash.com/photo-1555664424-778a69032334?q=80&w=2070'
        },
        {
            id: 'd1-13', title: 'Ideathon (EC)', category: 'Technical', day: 'Day 1',
            description: ['Team: 2-4 members', 'Innovative Ideas', 'Projector Used'],
            details: 'Venue: Seminar Hall',
            icon: <Lightbulb size={24} />, color: 'from-pink-500 to-rose-500',
            image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070'
        },
        {
            id: 'd1-14', title: 'Robo Race', category: 'Technical', day: 'Day 1',
            description: ['Individual', 'Follow Specs', 'Track Race'],
            details: 'Venue: Open Ground',
            icon: <Bot size={24} />, color: 'from-slate-500 to-gray-700',
            image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070'
        },
        {
            id: 'd1-15', title: 'Bio-Connect', category: 'Technical', day: 'Day 1',
            description: ['Team: 2-3 members', 'Presentation Based', 'Projector Provided'],
            details: 'Venue: Bio Lab',
            icon: <Activity size={24} />, color: 'from-green-500 to-emerald-600',
            image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2070'
        },
        {
            id: 'd1-16', title: 'Brain Hack', category: 'Technical', day: 'Day 1',
            description: ['(Problem Pitching)', 'Individual', 'No Gadgets'],
            details: 'Venue: Classrooms',
            icon: <BrainCircuit size={24} />, color: 'from-fuchsia-500 to-purple-600',
            image: 'https://images.unsplash.com/photo-1559757175-5b87cc45f633?q=80&w=2070'
        },

        // DAY 1 - CREATIVE / CULTURAL / BUSINESS / GAMING
        {
            id: 'd1-5', title: 'Pixel Craft', category: 'Creative', day: 'Day 1',
            description: ['(Poster Design)', 'Platform: Canva', 'Mobile Allowed'],
            details: 'Venue: Design Lab',
            icon: <Image size={24} />, color: 'from-pink-400 to-purple-400',
            image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=2070'
        },
        {
            id: 'd1-7', title: 'Shark Tank', category: 'Business', day: 'Day 1',
            description: ['Idea Pitching', '5-7 Mins', 'Innovation & Feasibility'],
            details: 'Venue: Auditorium',
            icon: <Users size={24} />, color: 'from-blue-600 to-cyan-600',
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070'
        },
        {
            id: 'd1-17', title: 'Cosplay', category: 'Cultural', day: 'Day 1',
            description: ['3 Min Performance', 'Costume & Creativity', 'Individual'],
            details: 'Venue: Seminar Hall',
            icon: <Skull size={24} />, color: 'from-red-600 to-orange-600',
            image: 'https://images.unsplash.com/photo-1612686635542-b27d7920ab0d?q=80&w=2070'
        },
        {
            id: 'd1-18', title: 'Artistry', category: 'Cultural', day: 'Day 1',
            description: ['Rangoli / Nail Art', 'Drawing / Face Painting', 'Bring Materials'],
            details: 'Venue: Art Block',
            icon: <Palette size={24} />, color: 'from-purple-500 to-pink-500',
            image: 'https://images.unsplash.com/photo-1460661631160-a562523081ad?q=80&w=2070'
        },
        {
            id: 'd1-19', title: 'Free Fire', category: 'Gaming', day: 'Day 1',
            description: ['Fair Play Mandatory', 'Mobile Gaming', 'Team Event'],
            details: 'Venue: E-Sports Arena',
            icon: <Gamepad2 size={24} />, color: 'from-orange-500 to-red-500',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070'
        },

        // DAY 2 - FASHION
        {
            id: 'd2-1', title: 'Fashion Show', category: 'Fashion', day: 'Day 2',
            description: ['Corporate Walk', 'Theme Based', 'Team/Individual'],
            details: 'Venue: Main Stage',
            icon: <Shirt size={24} />, color: 'from-pink-500 to-rose-500',
            image: 'https://images.unsplash.com/photo-1509631179647-b84917154012?q=80&w=2070'
        },
        {
            id: 'd2-2', title: 'Mehendi', category: 'Fashion', day: 'Day 2',
            description: ['Intricate Designs', 'Time Limit', 'Bring Cones'],
            details: 'Venue: Art Block',
            icon: <PenTool size={24} />, color: 'from-green-500 to-emerald-500',
            image: 'https://images.unsplash.com/photo-1563223168-52fb58dfe7f4?q=80&w=2070'
        },

        // DAY 2 - ONLINE
        {
            id: 'd2-3', title: 'Online Events', category: 'Online', day: 'Day 2',
            description: ['Chess', 'Meme Creation', 'Reels Contest'],
            details: 'Platform: Online',
            icon: <Smartphone size={24} />, color: 'from-blue-400 to-indigo-400',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2070'
        },

        // DAY 2 - FUN
        {
            id: 'd2-4', title: 'Variety Entertain', category: 'Fun', day: 'Day 2',
            description: ['Singing / Dancing', 'Stand-up Comedy', 'Adptune'],
            details: 'Venue: Auditorium',
            icon: <Mic2 size={24} />, color: 'from-yellow-400 to-red-400',
            image: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070'
        },
        {
            id: 'd2-5', title: 'Squid Game', category: 'Fun', day: 'Day 2',
            description: ['Elimination Games', 'Red Light Green Light', 'Survival'],
            details: 'Venue: Open Ground',
            icon: <Skull size={24} />, color: 'from-teal-600 to-pink-600',
            image: 'https://images.unsplash.com/photo-1635334200424-696232236d39?q=80&w=2070'
        },

        // DAY 2 - QUIZ
        {
            id: 'd2-6', title: 'Quiz Mania', category: 'Quiz', day: 'Day 2',
            description: ['K-pop / Anime', 'Kollywood Trivia', 'Channel Surfing'],
            details: 'Venue: Seminar Hall',
            icon: <HelpCircle size={24} />, color: 'from-violet-500 to-purple-500',
            image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070'
        },

        // DAY 2 - ARTS
        {
            id: 'd2-7', title: 'Stage Arts', category: 'Arts', day: 'Day 2',
            description: ['Instrumentals', 'Mime', 'Props Allowed'],
            details: 'Venue: Auditorium',
            icon: <Music size={24} />, color: 'from-indigo-500 to-blue-500',
            image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070'
        },

        // DAY 2 - SPORTS
        {
            id: 'd2-8', title: 'Power Sports', category: 'Sports', day: 'Day 2',
            description: ['Box Cricket', 'Dead Lift', 'Weight Lift'],
            details: 'Venue: Sports Complex',
            icon: <Trophy size={24} />, color: 'from-orange-500 to-red-600',
            image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070'
        }
    ];

    const filteredEvents = events.filter(e => {
        const matchesDay = e.day === activeDay;
        const matchesCategory = activeCategory === 'All' || e.category === activeCategory;
        return matchesDay && matchesCategory;
    });

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
                        {(['Day 1', 'Day 2'] as const).map((day) => (
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
                                        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                                            <p className="text-cyan-500 text-xs font-bold uppercase tracking-widest">
                                                {event.details}
                                            </p>
                                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-all">
                                                <ArrowUpRight size={16} />
                                            </div>
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

// Helper component for arrow
const ArrowUpRight = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M7 17L17 7" />
        <path d="M7 7h10v10" />
    </svg>
);

export default Events;
