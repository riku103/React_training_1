import styles from './Hero.module.css';
import { HeroProps } from '../../types/hero';

const Hero = ({
  title = '新しい体験をあなたに',
  subtitle = '革新的な製品で、あなたの日常をより豊かに、より便利に。',
  ctaText = '今すぐ体験する',
  ctaLink = '#contact',
}: HeroProps) => {
  return (
    <section id={styles.hero}>
      <div className={styles.sectionContainer}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <a href={ctaLink} className={styles.ctaButton}>{ctaText}</a>
      </div>
    </section>
  );
};

export default Hero;
