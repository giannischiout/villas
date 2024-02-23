

'use client'
import { useEffect } from "react";
import { BookForm } from "./BookForm"
import { useModal } from "../_context/useModal";
const BookNowModal = ({ isOpen, dates}) => {
    const { modalOpen, closeModal } = useModal();
    const handleScroll = () => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    };

    // Add or remove event listener on component mount/unmount
    useEffect(() => {
        handleScroll();
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [modalOpen]);
    return (
        <>
            {modalOpen ? (
                <div className="book_modal">
                    <BookForm  handleClose={closeModal} dates={dates}/>
                </div>
            ) : null}
        </>
    )
}


export default BookNowModal;