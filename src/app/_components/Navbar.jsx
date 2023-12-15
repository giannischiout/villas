'use client'
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useScroll, useTransform, motion, animate, stagger } from 'framer-motion';
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import { useAnimate } from 'framer-motion';

const Navbar = () => {
    return (
        <div className="navbar_container">
            <div className="navbar_left">
                    < Burger />
                <div>
                    <h1 className="tagline">Ionian Villas</h1>
                </div>
                <div>
                    <Languages />
                </div>
                {/* <div className='tagline_container'>

                </div> */}
            </div>
            <div className="nabar_right">
                <div className='icon_container'>
                        <Icons />
                        <BookNow />
                    </div>
            </div>

            <div className="navbar_inner_right">
               
            </div>
        </div>
    )
}


const Languages = () => {
    const [lang, setLang] = useState('en')

    const handleLang = (e) => {
        setLang(prev => prev == 'en' ? 'gr' : 'en')
    }
    return (
        <div className='languages'>
            <div onClick={handleLang} className={`lang ${lang == 'en' ? "lang_undeline" : null}`}>
                <span >English</span>
            </div>
            <div className="hor_seperator"></div>
            <div onClick={handleLang} className={`lang ${lang == 'gr' ? "lang_undeline" : null}`} >
                <span >Greek</span>
            </div>
        </div>
    )
}

const Burger = () => {
    const [scope, animate] = useAnimate()
    const handleMouseEnter = async () => {
        animate('.burger_curtain' , {
            scale: [0, 1],
            backgroundColor: 'var(--primary_dark)',
        
        }, {
            ease: 'easeIn',
            duration: 0.6
        })
        animate('svg' , {
            color: 'white'
        })
    }
    
    const handleMouseLeave = async () => {
        animate('.burger_curtain' , {
            scale: [1, 0],
            backgroundColor: 'transparent',
            color: 'var(--primary_dark)'
        }, {
            ease: 'easeOut',
            duration: 1
        })
        animate('svg' , {
            color: 'var(--primary_dark)'
        
        })
    }
    

    

    return (
        <div 
            className="burger" 
            ref={scope} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <div className='burger_curtain'></div>
            <Menu strokeWidth={1} />
        </div>
    )
}

const Icons = () => {

   const {scrollYProgress} = useScroll();
   const [direction, setDirection] = useState('down')
    const [scope, animate ] = useAnimate();
    let y = useTransform(scrollYProgress, [0, 0.1], [0, -100, ], {stiffness: 100, damping: 100 }, stagger(5))
//    useEffect(() => {

//         const handleScroll = (e) => {

//         }
//         const unbind =    scrollYProgress.on("change", handleScroll)
//         return () => {
//             unbind()
//         }

//    }, [scrollYProgress])
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


export const BookNow = () => {
    const [scope, animate] = useAnimate()

    const handlMouseOver = async () => {
        const bundleAnimations = async =() => {
            animate('.book_now_inner', {
                width: '100%'
            }, {
                ease: 'linear',
                duration: 0.5
            })
            animate('#book_icon', {
                color: 'white'
            }, {
                ease: 'easeInOut',
            })
        }
       
    }

    const handleMouseLeave = async () => {
        animate('.book_now_inner', {
            width: '80%'
        },
            {
                ease: 'easeOut',
                duration: 0.4

            })
        animate('#book_icon', {
            color: 'var(--primary_dark)'
        }, {
            ease: 'easeInOut',

        })
    }

    return (
        <div ref={scope} onMouseEnter={handlMouseOver} onMouseLeave={handleMouseLeave} className="book_now">
            <button className="book_now_inner">
            </button>
            <span>book now</span>
            <BsArrowUpRight id="book_icon" />
        </div>
    )
}
export default Navbar