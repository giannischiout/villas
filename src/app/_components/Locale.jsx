'use client'
import { createLocale } from "../actions";
import { useCookies } from 'next-client-cookies';
import { text } from "@/translations";
import { useRouter } from "next/navigation";



const Languages = () => {
    const cookies = useCookies();
    const router = useRouter();
    const locale = cookies.get('locale')  || 'locale=en';

    

    const handleLocale = (locale) => {
        createLocale(locale)
        router.refresh()
    }
    return (
        <div className="languages">
            <button
                onClick={() => handleLocale('locale=en')}
                className={locale === 'locale=en' ? 'lang_active' : ''}
            >
                {text[locale]?.localeBtnEn}
            </button>
            <hr />
            <button
                onClick={() => handleLocale('locale=el')}
                className={locale === 'locale=el' ? 'lang_active' : ''}
            >
                  {text[locale]?.localeBtnEl}
            </button>
            <hr />
            <button
                onClick={() => handleLocale('locale=de')}
                className={locale === 'locale=de' ? 'lang_active' : ''}
            >
                  {text[locale]?.localeBtnDe}
            </button>
        </div>

    )
}

export default Languages;