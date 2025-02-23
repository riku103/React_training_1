import React from 'react';
import styles from './Hero.module.css';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id={styles.hero}>
      <div className={styles.sectionContainer}>
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')}</p>
        <a href="#contact" className={styles.ctaButton}>
          {t('hero.ctaButton')}
        </a>
      </div>
    </section>
  );
};

export default React.memo(Hero);
