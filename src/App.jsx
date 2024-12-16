import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
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

      <footer>
        <div className="section-container">
          &copy; 2023 My Stylish LP. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
