import React, { createContext, useContext } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { translations } from './translations';

type TranslationKey = keyof typeof translations.en;

interface TranslationContextType {
  t: (key: TranslationKey) => string;
  currentLanguage: string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const currentLanguage = useSelector((state: RootState) => state.language.current);

  const t = (key: TranslationKey): string => {
    return translations[currentLanguage as keyof typeof translations]?.[key] || 
           translations.en[key] || 
           key;
  };

  return (
    <TranslationContext.Provider value={{ t, currentLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

export default useTranslation;
