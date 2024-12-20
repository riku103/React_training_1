import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id={styles.contact}>
      <div className={styles.sectionContainer}>
        <h2>お問い合わせ</h2>
        <form>
          <input type="text" placeholder="お名前" required />
          <input type="email" placeholder="メールアドレス" required />
          <textarea placeholder="メッセージ" required></textarea>
          <button type="submit">送信する</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
