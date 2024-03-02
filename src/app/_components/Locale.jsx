'use client'
import { createLocale } from "../actions";
import { useCookies } from 'next-client-cookies';
import { useEffect } from 'react';
import { text } from "@/translations";
import { useRouter } from "next/navigation";



const Languages = () => {
    const cookies = useCookies();
    const router = useRouter();
    const locale = cookies.get('locale')  || 'locale=en';

    
    
    
    const handleEn = () => {
        createLocale('locale=en')
        router.reload();


    }
    const handleEl = () => {
        createLocale('locale=el')
    }
    const handleDe = () => {
        createLocale('locale=de')
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
            <hr />
            <button
                onClick={handleDe}
                className={locale === 'locale=de' ? 'lang_active' : ''}
            >
                  {text[locale]?.localeBtnDe}
            </button>
        </div>

    )
}

export default Languages;