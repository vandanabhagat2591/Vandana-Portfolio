import {useState,useEffect} from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LaptopLoader from './components/Loader'

function App() {
  const [isLoading, setIsLoading] = useState(true);
   // Simulate data fetching or delay
   useEffect(() => {
    // Simulate a loading delay (e.g., fetching data or API call)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Loader will show for 2 seconds
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen bg-white">
    {isLoading ? (
      // Show Loader while the site is loading
      <div className="min-h-screen bg-purple-900-animated flex items-center justify-center">
      <div className="text-center">
        <LaptopLoader />
        <h2 className="text-2xl font-semibold text-white mt-4 loading-text">Loading, please wait...</h2>
      </div>
    </div>
    ) : (
      // Main content when loading is done
      <>
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </>
    )}
  </div>
  );
}

export default App;