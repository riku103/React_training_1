import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Hero />

        <Features />

        <Testimonials />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
