import styles from './About.module.css';
import Header from '../Header/Header';

const About = () => {
  return (
    <div id={styles.about}>
      <Header />

      <div className={styles.card}>
        <h1>私たちについて</h1>
        <p className={styles.description}>
          My Stylish LPは、革新的な製品とサービスを通じて、お客様の日常をより豊かにすることを目指しています。私たちは常に最高品質と使いやすさを追求し、24時間体制でサポートを提供しています。
        </p>
        <p className={styles.description}>
          2023年の設立以来、私たちは多くのお客様から信頼を頂き、日々成長を続けています。お客様の声に耳を傾け、常に改善を重ねることで、より良い製品とサービスを提供し続けます。
        </p>
        <button className={styles.detailButton}>詳細を見る</button>
      </div>
    </div>
  );
};

export default About;
