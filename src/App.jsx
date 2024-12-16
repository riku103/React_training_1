import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Hero />

        <Features />

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
