import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Hero />

        <Features />

        <Testimonials />

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
