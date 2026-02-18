
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
        <div className="bg-[#050510] min-h-screen text-white selection:bg-cyan-500/30">
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
