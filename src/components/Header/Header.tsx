import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import styles from "./Header.module.css";

const Header = ({ changeDarkMode }: { changeDarkMode?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

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
              <Link to="/">ホーム</Link>
            </li>
            <li>
              <Link to="/about">私たちについて</Link>
            </li>
            <li>
              <HashLink to="/#features">特徴</HashLink>
            </li>
            <li>
              <HashLink to="/#testimonials">お客様の声</HashLink>
            </li>
            <li>
              <HashLink to="/#contact">お問い合わせ</HashLink>
            </li>
          </ul>
          {changeDarkMode && (
            <div className={styles.toggleButton}>
              <input id="toggle" type="checkbox" onChange={changeDarkMode} />
              <label htmlFor="toggle" />
            </div>
          )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
