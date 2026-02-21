import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import EventDetails from './components/EventDetails';
import CounterLoading from './components/ui/counter-loader';
import CustomCursor from './components/ui/CustomCursor';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    return (
        <div className="bg-[#050510] min-h-screen text-white selection:bg-cyan-500/30">
            <CustomCursor />
            <AnimatePresence mode="wait">
                {loading ? (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-[#050510]"
                    >
                        <CounterLoading onComplete={() => setLoading(false)} />
                    </motion.div>
                ) : (
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
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
