import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Registration = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('2026-03-12T09:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 relative bg-[#050510] overflow-hidden">
            {/* Animated background beams */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_140deg,#00f3ff_160deg,transparent_180deg)] animate-[spin_10s_linear_infinite] opacity-10"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="p-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
                >
                    <div className="bg-[#0f0f25] rounded-[22px] p-8 md:p-16 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 bg-repeat pointer-events-none"></div>

                        <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6">
                            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Join Us?</span>
                        </h2>
                        <p className="text-gray-400 mb-10 text-lg">
                            Secure your spot at the biggest fest of 2026. Registration closes soon!
                        </p>

                        {/* Countdown */}
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
                            {Object.entries(timeLeft).map(([unit, value]) => (
                                <div key={unit} className="flex flex-col items-center">
                                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-white/5 border border-white/10 backdrop-blur flex items-center justify-center text-3xl md:text-4xl font-bold text-white shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                        {String(value).padStart(2, '0')}
                                    </div>
                                    <span className="mt-2 text-sm text-gray-400 uppercase tracking-widest">{unit}</span>
                                </div>
                            ))}
                        </div>

                        <button onClick={() => window.open('https://forms.gle/tyJKwbgkx3mgu8VU6', '_blank')} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-bold px-10 py-4 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transform hover:scale-105 transition-all duration-300">
                            Register For ENTHRAL 2K26
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Registration;
