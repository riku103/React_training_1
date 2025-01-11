import styles from './Features.module.css';

const getIconName = (index) => {
  const icons = ['gem', 'mobile-alt', 'headset'];
  return icons[index];
};

const Features = ({
  title = '',
  features = [
    {
      title: "最高品質",
      description: "厳選された素材と職人技が生み出す、比類なき品質をお届けします。"
    },
    {
      title: "使いやすさ",
      description: "直感的なデザインで、誰もが簡単に使いこなせる製品です。"
    },
    {
      title: "24時間サポート",
      description: "お客様のニーズに合わせて、いつでもどこでもサポートいたします。"
    },
  ]
}) => {
  return (
    <section id="features">
      <div className={styles.sectionContainer}>
        <h2>{title}</h2>
        <div className={styles.featureContainer}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <i className={`fas fa-${getIconName(index)}`}></i>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
