'use client'
// MyContext.js
import { createContext, useContext, useState } from 'react';

// Create a context with a default value
const LocaleContext = createContext();
// Create a provider component
export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState('locale=en');

    const handleLocale = () => {
        console.log('sefsefsejfop')
        if(locale === 'locale=en') {
            console.log('heres')
            setLocale('?locale=el');
        } else {

            setLocale('?locale=en');
        }
    }
  // Provide the context value to the children components
  return (
    <LocaleContext.Provider value={{ locale, handleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

// Create a custom hook to consume the context
export const useLocale = () => {
  return useContext(LocaleContext);
};