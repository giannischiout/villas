'use client'
import { useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import { useRouter } from "next/navigation";
import BookNowModal from "./BookNow";
const Book = ({normal, title, hasCloseBtn}) => {
    const [modal, setModal] = useState(false);
    console.log('has close')
    console.log(hasCloseBtn)
    return (
           <>
             <div onClick={() => setModal(prev => !prev)} className="btn_back" >
            <div className="btn">
                <button >
                </button>
                <span>book now </span>
            </div>
            <IoIosArrowRoundUp />
            </div>
            <BookNowModal hasCloseBtn={hasCloseBtn} setIsOpen={setModal} isOpen={modal}/>
           </>
          
    )
}

export const Btn = ({text, onClick}) => {
    return (
        <div onClick={onClick} className="btn_back_small" >
        <div className="btn_small">
            <button >
            </button>
            <span>{text}</span>
        </div>
        <IoIosArrowRoundUp />
        </div> 
    )
}


export const PostButton = ({id}) => {
   
    const router = useRouter();
    const onClick = () => {
        router.push(`/posts/single/${id}`)
    }
    return (
        <Btn text="see more" onClick={onClick} />
    )
}


export const RedirectButton = ({href}) => {
    const router = useRouter();
    const onClick = () => {
        router.push(href)
    }
    return (
    <button onClick={onClick} className="single_btn all_posts"> all posts</button>    )
}
export default Book;