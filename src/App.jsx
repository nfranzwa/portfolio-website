import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <div className="bg-glow top-glow"></div>
      <div className="bg-glow bottom-glow"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
