import React from 'react';
import styles from "./Testimonials.module.css";
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      text: t('testimonials.items.1.text'),
      author: t('testimonials.items.1.author')
    },
    {
      id: 2,
      text: t('testimonials.items.2.text'),
      author: t('testimonials.items.2.author')
    },
    {
      id: 3,
      text: t('testimonials.items.3.text'),
      author: t('testimonials.items.3.author')
    }
  ];

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.sectionContainer}>
        <h2>{t('testimonials.title')}</h2>
        <div className={styles.testimonialContainer}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonial}>
              <p>{testimonial.text}</p>
              <cite>{testimonial.author}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Testimonials);
