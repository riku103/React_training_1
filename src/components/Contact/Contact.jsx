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
          <div className={styles.inputContainer}>
            <input {...register("email",{
              required: "メールアドレスを入力してください。",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "有効なメールアドレスを入力してください。",
              },
              })}
              type="email"
              placeholder="メールアドレス"
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
          </div>
          <div className={styles.inputContainer}>
            <input
              {...register("tel", {
                pattern: {
                  value: /^[0-9]+$/,
                  message: "電話番号は数字のみで入力してください。",
                },
              })}
              type="tel"
              placeholder="電話番号"
            />
            {errors.tel && <p style={{ color: "red" }}>{errors.tel.message}</p>}
          </div>
          <textarea placeholder="メッセージ" rows="6"></textarea>
          <button type="submit">登録する</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
