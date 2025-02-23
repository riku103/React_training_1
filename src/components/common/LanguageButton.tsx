import React from 'react';
import styles from './LanguageButton.module.css';

interface LanguageButtonProps {
  currentLang: string;
  onChangeLang: (lang: string) => void;
}

const LanguageButton = ({ currentLang, onChangeLang }: LanguageButtonProps) => {
  return (
    <button
      className={styles.langButton}
      onClick={() => onChangeLang(currentLang === 'ja' ? 'en' : 'ja')}
    >
      {currentLang === 'ja' ? 'EN' : '日本語'}
    </button>
  );
};

export default React.memo(LanguageButton);
