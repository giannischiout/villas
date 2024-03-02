
import Link from 'next/link'
import { text } from '@/translations'
import { cookies } from "next/headers";

const FooterNew = () => {
    const cookieStore = cookies()
    const locale = cookieStore.get('locale').value || 'locale=en';
  
    return (
        <div className="footer_new_container">
            <div>
                <div>
                    <span>IOANIAN DREAM VILLAS</span>
                    <Link href={"/policy/terms"}>{text[locale]?.termsconditions}</Link>
                    <Link href={"/policy/disclaimer"}>{text[locale]?.privacy}</Link>
                    <Link href={"/policy/cookie-policy"}>{text[locale]?.cookies}</Link>
                </div>
            </div>
        </div>
    )
}

export default FooterNew