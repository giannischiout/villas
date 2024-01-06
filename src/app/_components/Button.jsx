import { IoIosArrowRoundUp } from "react-icons/io";

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


export default Book;