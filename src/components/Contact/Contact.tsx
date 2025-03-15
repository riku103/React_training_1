import styles from "./Contact.module.css";
import { useForm, useFieldArray } from "react-hook-form";
import { useState, useEffect, useCallback } from "react";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { PostalCode } from "../../types/postalCode";
import { useTranslation } from 'react-i18next';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const Contact = () => {
  const { t } = useTranslation();

  const formSchema = z.object({
    name: z.string().min(1, t('contact.validation.nameRequired')),
    emails: z.array(z.object({
      email: z.string()
        .min(1, t('contact.validation.emailRequired'))
        .email(t('contact.validation.emailInvalid')),
      confirmEmail: z.string()
        .min(1, t('contact.validation.confirmEmailRequired'))
    })).refine((data) => {
      return data.every(item => item.email === item.confirmEmail);
    }, {
      message: t('contact.validation.emailMismatch'),
      path: ["emails"]
    }),
    tels: z.array(z.object({
      tel: z.string()
        .min(1, t('contact.validation.phoneRequired'))
        .refine((val) => isValidPhoneNumber(val), t('contact.validation.phoneInvalid'))
    })),
    postalCode: z.string()
      .min(1, t('contact.validation.postalCodeRequired'))
      .regex(/^\d{7}$/, t('contact.validation.postalCodeInvalid')),
    address: z.string().min(1, t('contact.validation.addressRequired')),
    message: z.string().optional()
  });

  type FormValues = z.infer<typeof formSchema>;

  const { register, handleSubmit, control, formState: { errors, isSubmitting }, reset, setValue, watch } = useForm<FormValues>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
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
              {...register("name")}
              placeholder={t('contact.form.name')}
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
          </div>

          {emailFields.map((field, index) => (
            <div key={field.id} className={styles.inputContainer}>
              <input
                {...register(`emails.${index}.email`)}
                type="email"
                placeholder={t('contact.form.email')}
              />
              {errors.emails?.[index]?.email && (
                <p style={{ color: "red" }}>{errors.emails?.[index]?.email?.message}</p>
              )}

              <input
                {...register(`emails.${index}.confirmEmail`)}
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
                {...register(`tels.${index}.tel`)}
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
              {...register("address")}
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
