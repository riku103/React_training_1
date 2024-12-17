import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  const handleHamburgerClick = () => {
    const navLinks = document.querySelector(`.${styles.navLinks}`);
    navLinks.classList.toggle(styles.active);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>My Stylish LP</div>
        <nav>
          <div className={styles.hamburger} onClick={handleHamburgerClick}>
            ☰
          </div>
          <ul className={`${styles.navLinks}`}>
            <li>
              <a href="#hero">ホーム</a>
            </li>
            <li>
              <a href="#features">特徴</a>
            </li>
            <li>
              <a href="#testimonials">お客様の声</a>
            </li>
            <li>
              <a href="#contact">お問い合わせ</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
