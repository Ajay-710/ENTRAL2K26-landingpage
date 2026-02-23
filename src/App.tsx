import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import EventDetails from './components/EventDetails';
import CustomCursor from './components/ui/CustomCursor';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
    const location = useLocation();

    return (
        <div className="bg-[#050510] min-h-screen text-white selection:bg-cyan-500/30">
            <CustomCursor />
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
