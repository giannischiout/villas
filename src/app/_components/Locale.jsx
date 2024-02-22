'use client'
import { createLocale } from "../actions";
import { useCookies } from 'next-client-cookies';
import { useEffect } from 'react';
import { text } from "@/translations";
const Languages = () => {
    const cookies = useCookies();
    const locale = cookies.get('locale');
    useEffect(() => {
        if (!locale) {
            createLocale('locale=en')
        }
    }, [])
    return (
        <div className="languages">
            <button
                onClick={() => createLocale('locale=en')}
                className={locale === 'locale=en' ? 'lang_active' : ''}
            >
                {text[locale].localeBtnEn}
            </button>
            <hr />
            <button
                onClick={() => createLocale('locale=el')}
                className={locale === 'locale=el' ? 'lang_active' : ''}
            >
                  {text[locale].localeBtnEl}
            </button>
        </div>

    )
}

export default Languages;