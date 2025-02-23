import React from 'react';
import styles from './Features.module.css';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      id: 1,
      title: t('features.items.1.title'),
      description: t('features.items.1.description')
    },
    {
      id: 2,
      title: t('features.items.2.title'),
      description: t('features.items.2.description')
    },
    {
      id: 3,
      title: t('features.items.3.title'),
      description: t('features.items.3.description')
    }
  ];

  return (
    <section id="features" className={styles.features}>
      <div className={styles.sectionContainer}>
        <h2>{t('features.title')}</h2>
        <div className={styles.featureContainer}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.feature}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Features);
