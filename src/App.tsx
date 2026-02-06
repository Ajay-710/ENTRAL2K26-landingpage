import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Timeline from './components/Timeline';
import Highlights from './components/Highlights';
import Registration from './components/Registration';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { NavBarDemo } from './components/NavBarDemo';

function App() {
    return (
        <div className="bg-[#050510] min-h-screen text-white selection:bg-cyan-500/30">
            <CustomCursor />
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
}

export default App;
