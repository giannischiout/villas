'use client'
import { IoIosArrowRoundUp } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useModal } from "../_context/useModal";
import { useCookies } from 'next-client-cookies';
import { text } from "@/translations";

const Book = ({normal, title, hasCloseBtn}) => {
    const { modalOpen, openModal, closeModal } = useModal();
    const cookies = useCookies();
    const locale = cookies.get('locale');
    return (
           <>
             <div onClick={openModal} className="btn_back" >
            <div className="btn">
                <button >
                </button>
                <span>{text[locale].bookNow}</span>
            </div>
            <IoIosArrowRoundUp />
            </div>
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
    const cookies = useCookies();
    const locale = cookies.get('locale');
    const router = useRouter();
    const onClick = () => {
        router.push(`/posts/single/${id}`)
    }
    return (
        <Btn text={text[locale].seeMore} onClick={onClick} />
    )
}


export const RedirectButton = ({href}) => {
    const router = useRouter();
    const cookies = useCookies();
    const locale = cookies.get('locale');
    const onClick = () => {
        router.push(href)
    }
    return (
    <button onClick={onClick} className="single_btn all_posts">{text[locale].allPosts}</button>    )
}
export default Book;