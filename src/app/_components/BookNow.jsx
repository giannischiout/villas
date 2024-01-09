

'use client'
import { useEffect } from "react";
import { BookForm } from "./BookForm"
const BookNowModal = ({isOpen}) => {
    const handleScroll = () => {
		document.body.style.overflow = isOpen ? 'hidden' : 'auto';
	};

	// Add or remove event listener on component mount/unmount
	useEffect(() => {
		handleScroll();
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isOpen]);

    return (
       <>
        {isOpen ? (
             <div className="book_modal">
             <BookForm  />
         </div>
        ) : null}
       </>
    )
}


export default BookNowModal;