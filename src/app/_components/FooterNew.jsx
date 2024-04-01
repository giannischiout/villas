
import { text } from '@/translations'
import { cookies } from "next/headers";
import Image from 'next/image'
import Link from 'next/link'
const FooterNew = () => {
    const cookieStore = cookies()
    const locale = cookieStore.get('locale')?.value || 'locale=en';

    return (
        <div className="footer_new_container">
            <Link href="https://www.iyc.de/" className='footer_image'>
                <Image
                    src="/iyc_white.svg"
                    alt="iyc"
                    fill={true}
                    sizes="100px"
                />
            </Link>
            <div className='footer_links'>
                <span>IOANIAN DREAM VILLAS</span>
                <Link href={"/policy/terms"}>{text[locale]?.termsconditions}</Link>
                <Link href={"/policy/disclaimer"}>{text[locale]?.privacy}</Link>
                <Link href={"/policy/cookie-policy"}>{text[locale]?.cookies}</Link>
            </div>
        </div>
    )
}

export default FooterNew