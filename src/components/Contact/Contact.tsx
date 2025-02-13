import styles from "./Contact.module.css";
import { useForm, useFieldArray } from "react-hook-form";
import { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const Contact = () => {
  const { register, handleSubmit, control, formState: { errors, isSubmitting }, reset, watch } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      emails: [{ email: "", confirmEmail: "" }],
      tels: [{ tel: "" }],
      message: ""
    }
  });

  const { fields: emailFields, append: appendEmail, remove: removeEmail } = useFieldArray({
    control,
    name: "emails"
  });

  const { fields: telFields, append: appendTel, remove: removeTel } = useFieldArray({
    control,
    name: "tels"
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = () => {
    setIsSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.sectionContainer}>
        <h2>お問い合わせ</h2>
        {isSubmitted && (
          <div className={styles.successMessage}>お問い合わせが送信されました。</div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputContainer}>
            <input
              {...register("name", { required: "お名前を入力してください。" })}
              placeholder="お名前"
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
          </div>

          {emailFields.map((field, index) => (
            <div key={field.id} className={styles.inputContainer}>
              <input
                {...register(`emails.${index}.email`, {
                  required: "メールアドレスを入力してください。",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "有効なメールアドレスを入力してください。",
                  },
                })}
                type="email"
                placeholder="メールアドレス"
              />
              {errors.emails?.[index]?.email && (
                <p style={{ color: "red" }}>{errors.emails?.[index]?.email?.message}</p>
              )}

              <input
                {...register(`emails.${index}.confirmEmail`, {
                  required: "確認用メールアドレスを入力してください。",
                  validate: (value) => {
                    const emails = watch(`emails.${index}.email`);
                    return value === emails || "メールアドレスが一致しません。";
                  }
                })}
                type="email"
                placeholder="メールアドレス（確認用）"
              />
              {errors.emails?.[index]?.confirmEmail && (
                <p style={{ color: "red" }}>{errors.emails?.[index]?.confirmEmail?.message}</p>
              )}

              {emailFields.length > 1 && (
                <button type="button" onClick={() => removeEmail(index)}>メールアドレスを削除</button>
              )}
            </div>
          ))}
          <button type="button" onClick={() => appendEmail({ email: "", confirmEmail: "" })}>
            メールアドレスを追加
          </button>

          {telFields.map((field, index) => (
            <div key={field.id} className={styles.inputContainer}>
              <PhoneInput
                international
                defaultCountry="JP"
                {...register(`tels.${index}.tel`, {
                  validate: (value) => {
                    if (!value) return "電話番号を入力してください。";
                    if (!isValidPhoneNumber(value)) return "有効な電話番号を入力してください。";
                    return true;
                  }
                })}
                onChange={(value) => {
                  const event = {
                    target: {
                      name: `tels.${index}.tel`,
                      value: value || ''
                    }
                  };
                  register(`tels.${index}.tel`).onChange(event);
                }}
                placeholder="電話番号"
              />
              {errors.tels?.[index]?.tel && (
                <p style={{ color: "red" }}>{errors.tels?.[index]?.tel?.message}</p>
              )}
              {telFields.length > 1 && (
                <button type="button" onClick={() => removeTel(index)}>電話番号を削除</button>
              )}
            </div>
          ))}
          <button type="button" onClick={() => appendTel({ tel: "" })}>
            電話番号を追加
          </button>

          <div className={styles.inputContainer}>
            <textarea
              {...register("message")}
              placeholder="メッセージ"
              rows={6}
            />
          </div>
          <button type="submit" disabled={isSubmitting}>登録する</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
