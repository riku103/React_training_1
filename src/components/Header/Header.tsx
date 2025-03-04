import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import styles from "./Header.module.css";
import { useTranslation } from 'react-i18next';
import LanguageButton from '../common/LanguageButton';

const Header = ({
  changeDarkMode,
  currentLang = 'ja',
  onChangeLang
}: {
  changeDarkMode?: () => void,
  currentLang?: string,
  onChangeLang?: (lang: string) => void
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>My Stylish LP</div>
        <nav className={styles.nav}>
          <div className={styles.hamburger} onClick={toggleMenu}>
            {isOpen ? "✕" : "☰"}
          </div>
          <div className={styles.navContainer}>
            <ul className={isOpen ? styles.active : ""}>
              <li>
                {window.location.pathname === '/' ? (
                  <HashLink smooth to="/#top">{t('header.home')}</HashLink>
                ) : (
                  <Link to="/">{t('header.home')}</Link>
                )}
              </li>
              <li>
                <Link to="/about">{t('header.about')}</Link>
              </li>
              <li>
                <HashLink smooth to="/#features">{t('header.features')}</HashLink>
              </li>
              <li>
                <HashLink smooth to="/#testimonials">{t('header.testimonials')}</HashLink>
              </li>
              <li>
                <HashLink smooth to="/#contact">{t('header.contact')}</HashLink>
              </li>
            </ul>
            <div className={styles.controls}>
              {changeDarkMode && (
                <div className={styles.toggleButton}>
                  <input id="toggle" type="checkbox" onChange={changeDarkMode} />
                  <label htmlFor="toggle" />
                </div>
              )}
              {onChangeLang && (
                <LanguageButton
                  currentLang={currentLang}
                  onChangeLang={onChangeLang}
                />
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
