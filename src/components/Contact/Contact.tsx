import styles from "./Contact.module.css";
import { useForm, useFieldArray } from "react-hook-form";
import { useState, useEffect, useCallback } from "react";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { PostalCode } from "../../types/postalCode";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { register, handleSubmit, control, formState: { errors, isSubmitting }, reset, setValue, watch } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      emails: [{ email: "", confirmEmail: "" }],
      tels: [{ tel: "" }],
      postalCode: "",
      address: "",
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

  const postalCode = watch("postalCode");

  const isPostalCodeResponse = (data: any): data is PostalCode => {
    return (
      typeof data === 'object' &&
      data !== null &&
      'results' in data &&
      (data.results === null || Array.isArray(data.results))
    );
  };

  const fetchAddress = useCallback(async (postalCode: string) => {
    if (postalCode.length === 7) {
      try {
        const response = await fetch(
          `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postalCode}`
        );
        const data = await response.json();
        if (isPostalCodeResponse(data) && data.results) {
          const address = `${data.results[0].address1}${data.results[0].address2}${data.results[0].address3}`;
          setValue("address", address);
        }
      } catch (error) {
        console.error("郵便番号検索でエラーが発生しました:", error);
      }
    }
  }, [setValue]);

  // 郵便番号が変更されたときに住所を取得
  useEffect(() => {
    fetchAddress(postalCode);
  }, [postalCode, fetchAddress]);

  const onSubmit = () => {
    setIsSubmitted(true);
    reset();
  };

  const { t } = useTranslation();

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.sectionContainer}>
        <h2>{t('contact.title')}</h2>
        {isSubmitted && (
          <div className={styles.successMessage}>{t('contact.successMessage')}</div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputContainer}>
            <input
              {...register("name", { required: t('contact.validation.nameRequired') })}
              placeholder={t('contact.form.name')}
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
          </div>

          {emailFields.map((field, index) => (
            <div key={field.id} className={styles.inputContainer}>
              <input
                {...register(`emails.${index}.email`, {
                  required: t('contact.validation.emailRequired'),
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: t('contact.validation.emailInvalid'),
                  },
                })}
                type="email"
                placeholder={t('contact.form.email')}
              />
              {errors.emails?.[index]?.email && (
                <p style={{ color: "red" }}>{errors.emails?.[index]?.email?.message}</p>
              )}

              <input
                {...register(`emails.${index}.confirmEmail`, {
                  required: t('contact.validation.confirmEmailRequired'),
                  validate: (value) => {
                    const emails = watch(`emails.${index}.email`);
                    return value === emails || t('contact.validation.emailMismatch');
                  }
                })}
                type="email"
                placeholder={t('contact.form.confirmEmail')}
              />
              {errors.emails?.[index]?.confirmEmail && (
                <p style={{ color: "red" }}>{errors.emails?.[index]?.confirmEmail?.message}</p>
              )}

              {emailFields.length > 1 && (
                <button type="button" onClick={() => removeEmail(index)}>{t('contact.form.removeEmail')}</button>
              )}
            </div>
          ))}
          <button type="button" onClick={() => appendEmail({ email: "", confirmEmail: "" })}>{t('contact.form.addEmail')}</button>

          {telFields.map((field, index) => (
            <div key={field.id} className={styles.inputContainer}>
              <PhoneInput
                international
                defaultCountry="JP"
                {...register(`tels.${index}.tel`, {
                  validate: (value) => {
                    if (!value) return t('contact.validation.phoneRequired');
                    if (!isValidPhoneNumber(value)) return t('contact.validation.phoneInvalid');
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
                placeholder={t('contact.form.phone')}
              />
              {errors.tels?.[index]?.tel && (
                <p style={{ color: "red" }}>{errors.tels?.[index]?.tel?.message}</p>
              )}
              {telFields.length > 1 && (
                <button type="button" onClick={() => removeTel(index)}>{t('contact.form.removePhone')}</button>
              )}
            </div>
          ))}
          <button type="button" onClick={() => appendTel({ tel: "" })}>{t('contact.form.addPhone')}</button>

          <div className={styles.inputContainer}>
            <input
              {...register("postalCode", {
                required: t('contact.validation.postalCodeRequired'),
                pattern: {
                  value: /^\d{7}$/,
                  message: t('contact.validation.postalCodeInvalid'),
                },
                onChange: (e) => {
                  const value = e.target.value.replace(/[^\d]/g, "");
                  e.target.value = value;
                }
              })}
              placeholder={t('contact.form.postalCode')}
              style={{ width: "50%" }}
            />
            {errors.postalCode && <p style={{ color: "red" }}>{errors.postalCode.message}</p>}
          </div>

          <div className={styles.inputContainer}>
            <input
              {...register("address", { required: t('contact.validation.addressRequired') })}
              placeholder={t('contact.form.address')}
            />
            {errors.address && <p style={{ color: "red" }}>{errors.address.message}</p>}
          </div>

          <div className={styles.inputContainer}>
            <textarea
              {...register("message")}
              placeholder={t('contact.form.message')}
              rows={6}
            />
          </div>
          <button type="submit" disabled={isSubmitting}>{t('contact.form.submit')}</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
