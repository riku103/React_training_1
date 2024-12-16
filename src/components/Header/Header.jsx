const Header = () => {
  return (
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
  );
};

export default Header;
