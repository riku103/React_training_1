import React from 'react';
import styles from "./Footer.module.css";
import LanguageButton from '../common/LanguageButton';

const Footer = ({
  currentLang = 'ja',
  onChangeLang
}: {
  currentLang?: string;
  onChangeLang?: (lang: string) => void;
}) => {
  return (
    <footer>
      <div className={styles.sectionContainer}>
        {onChangeLang && (
          <LanguageButton
            currentLang={currentLang}
            onChangeLang={onChangeLang}
          />
        )}
        <div className={styles.footerContent}>
          &copy; 2023 My Stylish LP. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
