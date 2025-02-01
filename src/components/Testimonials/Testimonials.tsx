import React from 'react';
import styles from "./Testimonials.module.css";
import { TestimonialsProps } from '../../types/testimonials';

const Testimonials = ({
  title = '',
  testimonials = []
}: TestimonialsProps) => {
  return (
    <section id={styles.testimonials}>
      <div className={styles.sectionContainer}>
        <h2>{title}</h2>
        <div className={styles.testimonialContainer}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonial}>
              <p>{testimonial.text}</p>
              <cite>- {testimonial.author}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Testimonials);
