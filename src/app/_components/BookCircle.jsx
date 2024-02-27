'use client'
import { useModal } from "../_context/useModal"
import { useCookies } from 'next-client-cookies';
import { text } from "@/translations";
import { useRouter } from "next/navigation";
const BookCircle = ({}) => {
    const router = useRouter();
    const cookies = useCookies();
    const locale = cookies.get('locale') || 'locale=en';
    return (
        <button onClick={() => router.push('/booknow')} className="price_list_book">
        {text[locale]?.bookNow2}
    </button>
    )
}


export default BookCircle;