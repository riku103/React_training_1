import styles from "./Contact.module.css";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // フォームのデータを処理します
    console.log(data);
  };

  return (
    <section id={styles.contact}>
      <div className={styles.sectionContainer}>
        <h2>お問い合わせ</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputContainer}>
            <input {...register("name", { required: "お名前を入力してください。" })} placeholder="お名前" />
            {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
          </div>
          {/* <input type="email" placeholder="メールアドレス" required />
          <input type="tel" placeholder="電話番号" required />
          <textarea placeholder="メッセージ" rows="5" required></textarea> */}
          <button type="submit">送信する</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
