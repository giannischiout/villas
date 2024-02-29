

'use client'
import { BookForm } from "./BookForm"
const BookNowModal = ({ dates }) => {
    return (
        <>
            <div className="book_modal">
                <BookForm dates={dates} />
            </div>
        </>
    )
}


export default BookNowModal;