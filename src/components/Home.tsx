
import React from 'react';
import Hero from './Hero';
import About from './About';
import Events from './Events';
import Timeline from './Timeline';
import Highlights from './Highlights';
import Registration from './Registration';
import Footer from './Footer';
import { NavBarDemo } from './NavBarDemo';

const Home = () => {
    return (
        <div className="bg-[#050510] min-h-screen text-white selection:bg-cyan-500/30 overflow-x-hidden">
            <div className="fixed top-6 left-6 z-[60] pointer-events-none">
                <img src="/acelogo.png" alt="ACE Logo" className="h-16 w-auto md:h-24 object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]" />
            </div>
            <div className="fixed top-6 right-6 z-[60] pointer-events-none">
                <img src="/favicon.png" alt="Logo" className="h-16 w-auto md:h-24 object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]" />
            </div>
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
        </div>
    );
};

export default Home;
