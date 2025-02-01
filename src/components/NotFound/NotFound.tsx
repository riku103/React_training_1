import styles from './NotFound.module.css';
import Header from '../Header/Header';

const NotFound = () => {
  return (
    <div id={styles.notFound}>
      <Header />

      <div className={styles.card}>
        <h1>404</h1>
        <h2>ページが見つかりません</h2>
        <p className={styles.description}>
          申し訳ありませんが、お探しのページは存在しないか、移動した可能性があります。
        </p>
        <button className={styles.detailButton}>ホームに戻る</button>
      </div>
    </div>
  );
}

export default NotFound;
