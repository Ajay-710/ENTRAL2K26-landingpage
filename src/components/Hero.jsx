import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Zap } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#050510]">
            {/* Abstract Background Elements */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/30 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
            <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-pink-600/20 rounded-full blur-[100px] animate-float" />

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 bg-repeat"></div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center justify-center gap-2 mb-6"
                >
                    <span className="px-4 py-1.5 rounded-full border border-cyan-500/50 bg-cyan-500/10 text-cyan-400 text-sm font-medium tracking-wide shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                        COMING SOON • MARCH 2026
                    </span>
                </motion.div>

                <motion.h1
                    className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-6 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                >
                    ENTRAL 2K26
                </motion.h1>

                <motion.p
                    className="text-xl md:text-3xl text-gray-300 font-light tracking-wider mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Ignite. <span className="text-cyan-400 font-bold">Innovate.</span> Celebrate.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <button className="group relative px-8 py-4 bg-transparent border border-cyan-500/50 text-white font-bold text-lg rounded-xl overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300">
                        <div className="absolute inset-0 w-0 bg-cyan-600 transition-all duration-[250ms] ease-out group-hover:w-full opacity-20"></div>
                        <span className="relative flex items-center gap-2">
                            Register Now <Zap className="w-5 h-5 group-hover:fill-current" />
                        </span>
                    </button>

                    <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm">
                        View Events
                    </button>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500/0 via-cyan-500 to-cyan-500/0"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
