const Hero = ({
  title = '新しい体験をあなたに',
  subtitle = '革新的な製品で、あなたの日常をより豊かに、より便利に。',
  ctaText = '今すぐ体験する',
  ctaLink = '#contact',
}) => {
  return (
    <section id="hero">
      <div className="section-container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <a href={ctaLink} className="cta-button">{ctaText}</a>
      </div>
    </section>
  );
};

export default Hero;
