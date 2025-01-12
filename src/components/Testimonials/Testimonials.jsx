import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section id={styles.testimonials}>
      <div className={styles.sectionContainer}>
        <h2>お客様の声</h2>
        <div className={styles.testimonialContainer}>
          <div className={styles.testimonial}>
            <p>"この製品は私の生活を劇的に変えました。毎日が楽しくなります。"</p>
            <cite>- 田中 花子さん</cite>
          </div>
          <div className={styles.testimonial}>
            <p>"使いやすさが抜群です。他の製品とは比べものになりません。"</p>
            <cite>- 佐藤 太郎さん</cite>
          </div>
          <div className={styles.testimonial}>
            <p>"サポートの質が素晴らしい。困ったときにいつでも頼れるのが心強いです。"</p>
            <cite>- 鈴木 一郎さん</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
