import styles from "./Contact.module.css";
import { useForm, useFieldArray } from "react-hook-form";
import { useState } from "react";
const Contact = () => {
  const { register, handleSubmit, control, formState: { errors, isSubmitting }, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      contacts: [{ name: "", email: "", tel: "", message: "" }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "contacts"
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitted(true);
    reset();
  };

  return (
    <section id={styles.contact}>
      <div className={styles.sectionContainer}>
        <h2>お問い合わせ</h2>
        {isSubmitted && (
          <div className={styles.successMessage}>お問い合わせが送信されました。</div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field, index) => (
            <div key={field.id}>
              <div className={styles.inputContainer}>
                <input
                  {...register(`contacts.${index}.name`, { required: "お名前を入力してください。" })}
                  placeholder="お名前"
                />
                {errors.contacts?.[index]?.name &&
                  <p style={{ color: "red" }}>{errors.contacts[index].name.message}</p>
                }
              </div>
              <div className={styles.inputContainer}>
                <input
                  {...register(`contacts.${index}.email`, {
                    required: "メールアドレスを入力してください。",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "有効なメールアドレスを入力してください。",
                    },
                  })}
                  type="email"
                  placeholder="メールアドレス"
                />
                {errors.contacts?.[index]?.email &&
                  <p style={{ color: "red" }}>{errors.contacts[index].email.message}</p>
                }
              </div>
              <div className={styles.inputContainer}>
                <input
                  {...register(`contacts.${index}.tel`, {
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "電話番号は数字のみで入力してください。",
                    },
                  })}
                  type="tel"
                  placeholder="電話番号"
                />
                {errors.contacts?.[index]?.tel &&
                  <p style={{ color: "red" }}>{errors.contacts[index].tel.message}</p>
                }
              </div>
              <div className={styles.inputContainer}>
                <textarea
                  {...register(`contacts.${index}.message`)}
                  placeholder="メッセージ"
                  rows="6"
                />
              </div>
              {fields.length > 1 && (
                <button type="button" onClick={() => remove(index)}>削除</button>
              )}
            </div>
          ))}
          <button type="button" onClick={() => append({ name: "", email: "", tel: "", message: "" })}>
            連絡先を追加
          </button>
          <button type="submit" disabled={isSubmitting}>登録する</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
