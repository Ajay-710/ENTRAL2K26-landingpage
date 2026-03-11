import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import EventDetails from './components/EventDetails';
import CustomCursor from './components/ui/CustomCursor';
import { AnimatePresence, motion } from 'framer-motion';
import { useRegistrationStatus } from './hooks/useRegistrationStatus';

function App() {
    const location = useLocation();
    const isRegistrationOpen = useRegistrationStatus();

    return (
        <div className="bg-[#050510] min-h-screen text-white selection:bg-cyan-500/30">
            <CustomCursor />
            {/* Global Registration Closed Banner */}
            {!isRegistrationOpen && (
                <div className="fixed top-0 left-0 w-full bg-red-600 z-[100] text-center py-2 px-4 shadow-[0_0_15px_rgba(220,38,38,0.6)] flex flex-col items-center justify-center pointer-events-none">
                    <p className="text-white font-black uppercase tracking-widest text-sm md:text-lg drop-shadow-md">
                        🚨 ONLINE REGISTRATIONS ARE CLOSED! 🚨
                    </p>
                    <p className="text-yellow-300 font-bold uppercase tracking-widest text-xs md:text-sm drop-shadow-md mt-1">
                        ✨ ON-SPOT REGISTRATIONS ARE AVAILABLE ✨
                    </p>
                </div>
            )}
            <AnimatePresence mode="wait">
                <motion.div
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/events/:id" element={<EventDetails />} />
                    </Routes>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default App;
