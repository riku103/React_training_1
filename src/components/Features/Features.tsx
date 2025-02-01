import React from 'react';
import styles from './Features.module.css';
import { FeaturesProps } from '../../types/feature';

const Features = ({
  title = '',
  features = []
}: FeaturesProps) => {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.sectionContainer}>
        <h2>{title}</h2>
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
