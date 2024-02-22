'use client'
import { createLocale } from "../actions";
import { useCookies } from 'next-client-cookies';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'

import { text } from "@/translations";
const Languages = () => {
    const cookies = useCookies();
    const router = useRouter();
    const locale = cookies.get('locale');
    useEffect(() => {
        if (!locale) {
            createLocale('locale=en')
        }
    }, [])
    const handleEn = () => {
        createLocale('locale=en')

    }
    const handleEl = () => {
        createLocale('locale=el')
    }
    return (
        <div className="languages">
            <button
                onClick={handleEn}
                className={locale === 'locale=en' ? 'lang_active' : ''}
            >
                {text[locale]?.localeBtnEn}
            </button>
            <hr />
            <button
                onClick={handleEl}
                className={locale === 'locale=el' ? 'lang_active' : ''}
            >
                  {text[locale]?.localeBtnEl}
            </button>
        </div>

    )
}

export default Languages;