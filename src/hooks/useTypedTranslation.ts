import { useTranslation } from 'react-i18next';
import { TranslationKey } from '../types/i18n';

export const useTypedTranslation = () => {
  const { t, i18n } = useTranslation();

  return {
    t: (key: TranslationKey, options?: Record<string, unknown>) => t(key, options),
    i18n
  };
};
