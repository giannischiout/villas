'use client'
import { createLocale } from "../actions";
import { useState } from "react";
const Languages = () => {
    const [locale, setLocale] = useState('locale=en&?')
  
    return (
            <form action={() => createLocale(locale)} className="languages">
                <button 
                    onClick={() => setLocale('locale=en')}
                    className={locale === 'locale=en' ? 'lang_active' : ''}
                >English</button>
                <hr />
                <button 
                    onClick={() => setLocale('locale=el')}
                    className={locale === 'locale=el' ? 'lang_active' : ''}
                >Greek</button>
            </form>
          
    )
}

export default Languages;