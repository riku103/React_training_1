import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-container">
          <div className="logo">My Stylish LP</div>
          <nav>
            <div className="hamburger">☰</div>
            <ul className="nav-links">
              <li><a href="#hero">ホーム</a></li>
              <li><a href="#features">特徴</a></li>
              <li><a href="#testimonials">お客様の声</a></li>
              <li><a href="#contact">お問い合わせ</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero">
          <div className="section-container">
            <h1>新しい体験をあなたに</h1>
            <p>革新的な製品で、あなたの日常をより豊かに、より便利に。</p>
            <a href="#contact" className="cta-button">今すぐ体験する</a>
          </div>
        </section>

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

        <section id="testimonials">
          <div className="section-container">
            <h2>お客様の声</h2>
            <div className="testimonial-container">
              <div className="testimonial">
                <p>"この製品は私の生活を劇的に変えました。毎日が楽しくなります。"</p>
                <cite>- 田中 花子さん</cite>
              </div>
              <div className="testimonial">
                <p>"使いやすさが抜群です。他の製品とは比べものになりません。"</p>
                <cite>- 佐藤 太郎さん</cite>
              </div>
              <div className="testimonial">
                <p>"サポートの質が素晴らしい。困ったときにいつでも頼れるのが心強いです。"</p>
                <cite>- 鈴木 一郎さん</cite>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="section-container">
            <h2>お問い合わせ</h2>
            <form>
              <input type="text" placeholder="お名前" required />
              <input type="email" placeholder="メールアドレス" required />
              <textarea placeholder="メッセージ" required></textarea>
              <button type="submit">送信する</button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="section-container">
          &copy; 2023 My Stylish LP. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;