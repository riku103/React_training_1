import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const features = [
    {
      title: "最高品質",
      description: "厳選された素材と職人技が生み出す、比類なき品質をお届けします。"
    },
    {
      title: "使いやすさ",
      description: "直感的なデザインで、誰もが簡単に使いこなせる製品です。"
    },
    {
      title: "24時間サポート",
      description: "お客様のニーズに合わせて、いつでもどこでもサポートいたします。"
    },
  ]

  return (
    <div className="App">
      <Header />

      <main>
        <Hero />

        <Features title="特徴" features={features} />

        <Testimonials />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
