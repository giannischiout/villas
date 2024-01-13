'use client'
import { IoIosArrowRoundUp } from "react-icons/io";
import { useRouter } from "next/navigation";
const Book = ({normal, title}) => {
    return (
            <div className="btn_back" >
            <div className="btn">
                <button >
                </button>
                <span>book now </span>
            </div>
            <IoIosArrowRoundUp />
            </div>
          
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