
'use client'
import { useRef, useEffect, useState } from "react";
import { useTransform, useScroll, motion, useSpring, cubicBezier, circOut, easeInOut, easeIn, useInView } from "framer-motion";
import Image from "next/image";
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BookForm } from "./BookForm";
import { IoChevronDownSharp } from "react-icons/io5";



const Footer = () => {
    const targetRef = useRef(null);
    const viewRef = useRef(null);
    const inView = useInView(viewRef, {})
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const [screenDimensions, setScreenDimensions] = useState({
        width: 0,
        height: 0,
      });


      useEffect(() => {
        console.log(screenDimensions)
      }, [screenDimensions])
    
      useEffect(() => {
        const updateDimensions = () => {
          setScreenDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
    
        // Initial dimensions
        updateDimensions();
    
        // Event listener for window resize
        window.addEventListener('resize', updateDimensions);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('resize', updateDimensions);
        };
      }, []); // Empty dependency array ensures that the effect runs only once on mount

    const value = useTransform(scrollYProgress, [0, 1], ["0%", "-40vw"]);
    const valuex = useTransform(scrollYProgress, [0, 1], ["0%", "40vw"]);


    return (
        <div className="_test">
            <div className="form_mobile">
            <BookForm width={'60%'} />

            </div>
            <div ref={targetRef} className="footer_container">
                <div className="footer_inner">
                    <motion.div
                        style={{ x: screenDimensions.width < 1000 ? 0 : value }}
                        transition={{ duration: 10 }}
                        className="footer_motion"
                    >
                        <FooterImage value={screenDimensions.width < 1000 ? 0 : valuex} />
                        <div className="footer_form">
                            <div></div>
                        <BookForm width={'60%'} />
                        </div>
                    </motion.div>
                </div>

            </div>

        </div>
    )
}


const FooterImage = ({ value }) => {

    return (
        <div>
            <div className="footer_image">
                <div className="footer_image_inner">
                    <div className="footer_left">
                        <motion.div
                            style={{ x: value }}
                            className="footer_content">
                            <p>Ionnian Villas</p>
                            <div>
                                <span>Via Capriglione</span>
                                <span>84010 Praiano</span>
                                <span>Amalfi Coast, SA</span>
                                <span>ph +39 089 8131333</span>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div className="footer_right">
                        <div className="footer_icons">
                        <motion.div className="icon" >
                            <RiFacebookFill />
                        </motion.div>
                        <motion.div className="icon" >
                            <RiInstagramFill />
                        </motion.div>
                        <motion.div className="icon" >
                            <BsFillEnvelopeFill />
                        </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}




export default Footer;