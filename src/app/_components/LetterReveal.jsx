
import {useAnimate, stagger} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState, useRef } from 'react';
const LetterReveal = ({word, style}) => {
    const [ref, inView] = useInView();
    const itemRef = useRef(null);
    const [scope, animate] = useAnimate();
    const [value, setValue] = useState('#e8e6de');

    const staggerMenuItems = stagger(0.1);

    
    const letterElements = word.split('').map((letter, index) => (
        <span  key={index} className="letter_reveal ">
            {letter}
        </span>
    ));


    const handleAnimation = async () => {
        animate('.letter_reveal' , {
            opacity: [0, 1],
            translateY: ['-20%', '0%'],
            y: ['50%', '0%'],
        }, {
            ease: 'easeInOut',
            duration: 0.6,
            delay: staggerMenuItems
        })
    }
    useEffect(() => {
    
        if(inView) {
            handleAnimation()
        }
    }, [inView])

 
    return (
        <div ref={ref} className='' >
            <div  ref={scope }  className={`${style}`}>
                {letterElements}
        </div>
        </div>
    )
}

export default LetterReveal;