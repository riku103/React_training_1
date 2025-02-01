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
      id: 1,
      title: "最高品質",
      description: "厳選された素材と職人技が生み出す、比類なき品質をお届けします。"
    },
    {
      id: 2,
      title: "使いやすさ",
      description: "直感的なデザインで、誰もが簡単に使いこなせる製品です。"
    },
    {
      id: 3,
      title: "24時間サポート",
      description: "お客様のニーズに合わせて、いつでもどこでもサポートいたします。"
    },
  ]

  const testimonials = [
    {
      id: 1,
      text: "この製品は私の生活を劇的に変えました。毎日が楽しくなります。",
      author: "田中 花子さん"
    },
    {
      id: 2,
      text: "使いやすさが抜群です。他の製品とは比べものになりません。",
      author: "佐藤 太郎さん"
    },
    {
      id: 3,
      text: "サポートの質が素晴らしい。困ったときにいつでも頼れるのが心強いです。",
      author: "鈴木 一郎さん"
    }
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

        <Testimonials title="お客様の声" testimonials={testimonials} />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
