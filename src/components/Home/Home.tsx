import { useState } from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Features from '../Features/Features';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';

// ホームページのコンポーネント
const Home = () => {
  const { language, setLanguage } = useLanguage();
  const [darkMode, setDarkMode] = useState(false);

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const handleChangeLang = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Header
        currentLang={language}
        changeDarkMode={changeDarkMode}
        onChangeLang={handleChangeLang}
      />

      <main>
        <Hero />

        <Features />

        <Testimonials />

        <Contact />
      </main>

      <Footer
        currentLang={language}
        onChangeLang={handleChangeLang}
      />
    </div>
  );
};

export default Home;
