import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Timeline from './components/Timeline';
import Highlights from './components/Highlights';
import Registration from './components/Registration';
import Footer from './components/Footer';
import { NavBarDemo } from './components/NavBarDemo';
import CounterLoading from './components/ui/counter-loader';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
    const [loading, setLoading] = useState(true);

    // Timer logic is now handled in CounterLoading via onComplete


    return (
        <div className="bg-[#050510] min-h-screen text-white selection:bg-cyan-500/30">
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
                        <NavBarDemo />
                        <main>
                            <Hero />
                            <About />
                            <Events />
                            <Timeline />
                            <Highlights />
                            <Registration />
                        </main>
                        <Footer />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
