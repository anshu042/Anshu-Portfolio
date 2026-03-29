import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
  useEffect(() => {
    // 1. Prevent browser from restoring previous scroll position
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // 2. Force scroll to top
    window.scrollTo(0, 0);

    // 3. Clear any `#hash` from the URL so it doesn't jump down
    if (window.location.hash) {
      history.replaceState(null, null, window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <>
      <Background />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
