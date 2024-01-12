'use client'
import { createLocale } from "../actions";
import { useEffect, useState } from "react";

const Languages = () => {
    const [locale, setLocale] = useState()
    
 
    return (
            <div  className="languages">
                <button 
                    onClick={() => createLocale('locale=en')}
                    className={locale === 'locale=en' ? 'lang_active' : ''}
                >English</button>
                <hr />
                <button 
                    onClick={() => createLocale('locale=el')}
                    className={locale === 'locale=el' ? 'lang_active' : ''}
                >Greek</button>
            </div>
          
    )
}

export default Languages;