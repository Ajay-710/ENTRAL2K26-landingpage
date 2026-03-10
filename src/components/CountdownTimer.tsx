import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CountdownTimer = () => {
    // Set target date to 10 minutes from now
    const [targetDate] = useState(new Date('2026-03-10T18:44:51+05:30').getTime());
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                setIsExpired(true);
                setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
            } else {
                setTimeLeft({
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    if (isExpired) return null;

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, type: 'spring' }}
            className="fixed bottom-0 left-0 w-full z-50 p-4 pointer-events-none"
        >
            <div className="max-w-md mx-auto pointer-events-auto">
                <div className="backdrop-blur-md bg-white/5 border border-cyan-500/20 rounded-2xl p-3 md:p-4 shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left transition-all hover:bg-white/10 hover:border-cyan-500/40">
                    <div>
                        <h3 className="text-cyan-400 font-semibold text-sm md:text-base mb-1 tracking-wider uppercase">
                            Registration Closes In
                        </h3>
                        <p className="text-gray-300 text-xs md:text-sm">
                            Don't miss out on ENTRAL 2K26!
                        </p>
                    </div>

                    <div className="flex items-center gap-2 md:gap-3 text-white">
                        <div className="flex flex-col items-center">
                            <span className="text-xl md:text-2xl font-bold font-mono tracking-widest text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                                {String(timeLeft.hours).padStart(2, '0')}
                            </span>
                            <span className="text-[10px] text-cyan-500/70 uppercase">Hours</span>
                        </div>
                        <span className="text-xl md:text-2xl font-bold font-mono text-cyan-500 animate-pulse">:</span>
                        <div className="flex flex-col items-center">
                            <span className="text-xl md:text-2xl font-bold font-mono tracking-widest text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                                {String(timeLeft.minutes).padStart(2, '0')}
                            </span>
                            <span className="text-[10px] text-cyan-500/70 uppercase">Mins</span>
                        </div>
                        <span className="text-xl md:text-2xl font-bold font-mono text-cyan-500 animate-pulse">:</span>
                        <div className="flex flex-col items-center">
                            <span className="text-xl md:text-2xl font-bold font-mono tracking-widest text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                                {String(timeLeft.seconds).padStart(2, '0')}
                            </span>
                            <span className="text-[10px] text-cyan-500/70 uppercase">Secs</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CountdownTimer;
