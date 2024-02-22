'use client'
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useScroll, useTransform, motion, animate, stagger } from 'framer-motion';
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import { useAnimate } from 'framer-motion';
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useCookies } from 'next-client-cookies';
import NavMenu from './Menu';
import BookNowModal from './BookNow';
import Languages from './Locale';
import { useModal } from '../_context/useModal';
import { text } from "@/translations";
const Navbar = ({dates}) => {
    const { toggleModal } = useModal();
    const cookies = useCookies();
    const locale = cookies.get('locale');
    const {scrollYProgress} = useScroll();
    const [clicked, setClicked] = useState(false)
    const [modal, setModal] = useState(false)
    let y = useTransform(scrollYProgress, [0, 0.1], [0, -100, ], {stiffness: 100, damping: 100 }, stagger(5))

    
    const onClick = () => {
        setClicked(prev => !prev)
    }
    return (
        <div>
             <div className="navbar_container">
            <div className='grid_burger'>
                < Burger onClick={onClick} clicked={clicked} />
            </div>
            <div className='grid_tagline'>
            <motion.div style={{y}}>
                    < Languages />
                </motion.div>
            </div>
            <div className='grid_icons'>
                <Icons />
                <BookNow onClick={toggleModal} text={'sefsefs'}/>
            </div>
        </div>
            <NavMenu isOpen={clicked} setIsOpen={setClicked}/>
            <BookNowModal isOpen={modal} dates={dates}/>
        </div>
    )
}




const Burger = ({onClick, clicked}) => {
    const [scope, animate] = useAnimate()
    const handleMouseEnter = async () => {
        animate(scope.current , {
            backgroundColor: 'var(--primary)',
        
        }, {
            ease: 'easeInOut',
            duration: 1
        })
        animate('svg' , {
            color: 'white'
        })
    }
    
    const handleMouseLeave = async () => {
        animate( scope.current, {
            backgroundColor: 'transparent',
            color: 'var(--primary_dark)'
        }, {
            ease: 'easeInOut',
            duration: 1
        })
        animate('svg' , {
            color: 'var(--primary)'
        })
       
    }
    

    

    return (
        // <div className={`nav_burger ${clicked ? 'times' : null }`} onClick={onClick}>
        <div 
        ref={scope} 
        className={`nav_burger `} 
       
        onClick={onClick}>
            {clicked ? (
                    <IoCloseOutline className='burger_times_icon'/>
                    
            ) : (
                 <RxHamburgerMenu className='' />
            )}
        </div>
    )
}

const Icons = () => {

   const {scrollYProgress} = useScroll();
    let y = useTransform(scrollYProgress, [0, 0.1], [0, -100, ], {stiffness: 100, damping: 100 }, stagger(5))

    return (
        <div className="icons" >
            <motion.div className="icon" style={{y}}>
                <RiFacebookFill />
            </motion.div>
            <motion.div className="icon" style={{y}}>
                <RiInstagramFill />
            </motion.div>
            <motion.div className="icon" style={{y}}>
                <BsFillEnvelopeFill />
            </motion.div>
        </div>
    )
}


 export const BookNow = ({text, onClick}) => {
    const [scope, animate] = useAnimate()

    const handlMouseOver = async () => {
            animate('.book_now_inner', {
                width: '100%'
            }, {
                ease: 'linear',
                duration: 0.3
            })
            animate('#book_icon', {
                color: 'white'
            }, {
                ease: 'easeInOut',
            })
       
    }

    const handleMouseLeave = async () => {
        animate('.book_now_inner', {
            width: '80%'
        },
            {
                ease: 'easeOut',
                duration: 0.2

            })
        animate('#book_icon', {
            color: 'var(--primary_dark)'
        }, {
            ease: 'easeInOut',

        })
    }

    return (
        <div
        onClick={onClick} 
        ref={scope} onMouseEnter={handlMouseOver} onMouseLeave={handleMouseLeave} className="book_now">
            <button className="book_now_inner">
            </button>
            <span>{text}</span>
            <BsArrowUpRight id="book_icon" />
        </div>
    )
}
export default Navbar