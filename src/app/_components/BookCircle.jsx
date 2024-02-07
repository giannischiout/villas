'use client'
import { useModal } from "../_context/useModal"
const BookCircle = ({}) => {
    const { modalOpen, openModal, closeModal } = useModal();
    return (
        <button onClick={openModal} className="price_list_book">
        Book now
    </button>
    )
}


export default BookCircle;