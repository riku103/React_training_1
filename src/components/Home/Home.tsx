import { useState } from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Features from '../Features/Features';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

// ホームページのコンポーネント
function Home() {
  const [darkMode, setDarkMode] = useState(false);

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

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Header changeDarkMode={changeDarkMode} />

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

export default Home;
