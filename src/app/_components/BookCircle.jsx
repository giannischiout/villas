'use client'
import { useModal } from "../_context/useModal"
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation'
import { text } from "@/translations";
const BookCircle = ({}) => {

    const cookies = useCookies();
    const locale = cookies.get('locale') || 'locale=en';
    const { modalOpen, openModal, closeModal } = useModal();
    return (
        <button onClick={openModal} className="price_list_book">
        {text[locale]?.bookNow2}
    </button>
    )
}


export default BookCircle;