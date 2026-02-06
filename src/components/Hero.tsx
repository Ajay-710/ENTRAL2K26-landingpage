import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { Vortex } from './ui/vortex';
import { ParticleTextEffect } from './ui/particle-text-effect';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center">
            {/* Vortex Animation Background */}
            <div className="absolute inset-0 z-0">
                <Vortex
                    backgroundColor="black"
                    rangeY={800}
                    particleCount={500}
                    baseHue={160} // Cyan/Greenish hue
                    className="w-full h-full"
                />
            </div>

            {/* Content Layer */}
            <div className="relative z-20 w-full max-w-7xl px-4 flex flex-col items-center text-center">

                {/* Institution Name */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-4"
                >
                    <span className="text-cyan-400 text-sm font-black tracking-[0.4em] uppercase">
                        Alpha College of Engineering
                    </span>
                </motion.div>

                {/* Date Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mb-8"
                >
                    <span className="px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase shadow-[0_0_15px_rgba(6,182,212,0.2)] backdrop-blur-sm">
                        March 12 - 13, 2026
                    </span>
                </motion.div>

                {/* Main Heading - The Focal Point */}
                <div className="relative mb-6 w-full flex justify-center">
                    <ParticleTextEffect words={["ENTRAL", "2K26"]} />
                </div>

                {/* Subtitle/Tagline */}
                <motion.p
                    className="text-lg md:text-3xl text-gray-400 font-medium tracking-[0.1em] max-w-3xl mx-auto mb-12 uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                >
                    "The Greatest of <span className="text-white">Alpha</span> Time"
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <button className="group relative px-10 py-5 bg-cyan-500 text-black font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]">
                        <span className="relative z-10 flex items-center gap-2">
                            Register Now <Zap className="w-5 h-5 fill-black" />
                        </span>
                    </button>

                    <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md">
                        Explore Events
                    </button>
                </motion.div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-10" />

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/30 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] tracking-[0.4em] uppercase font-bold">Scroll Down</span>
                    <div className="w-[1px] h-10 bg-gradient-to-b from-cyan-500 to-transparent"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
