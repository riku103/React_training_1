import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Features from '../Features/Features';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

// ホームページのコンポーネント
function Home() {
  const { i18n } = useTranslation();

  const [darkMode, setDarkMode] = useState(false);
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Header
        currentLang={currentLang}
        changeDarkMode={changeDarkMode}
        onChangeLang={handleChangeLang}
      />

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

export default Home;
