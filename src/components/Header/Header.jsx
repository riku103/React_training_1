import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

const Header = () => {
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
        <nav>
          <div className={styles.hamburger} onClick={toggleMenu}>
            {isOpen ? "✕" : "☰"}
          </div>
          <ul className={isOpen ? styles.active : ""}>
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
