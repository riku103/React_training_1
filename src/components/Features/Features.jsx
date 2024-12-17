const Features = () => {
  return (
    <section id="features">
      <div className="section-container">
        <h2>特徴</h2>
        <div className="feature-container">
          <div className="feature">
            <i className="fas fa-gem"></i>
            <h3>最高品質</h3>
            <p>厳選された素材と職人技が生み出す、比類なき品質をお届けします。</p>
          </div>
          <div className="feature">
            <i className="fas fa-mobile-alt"></i>
            <h3>使いやすさ</h3>
            <p>直感的なデザインで、誰もが簡単に使いこなせる製品です。</p>
          </div>
          <div className="feature">
            <i className="fas fa-headset"></i>
            <h3>24時間サポート</h3>
            <p>お客様のニーズに合わせて、いつでもどこでもサポートいたします。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
