'use client'
import { useAnimate, useScroll, useTransform, motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useModal } from "../_context/useModal";
import {text} from "@/translations"
import { useCookies } from 'next-client-cookies';




export const SectionThree = ({data}) => {
    const forwardRef = useRef(null);
    const isInView = useInView(forwardRef);
    const mainControls = useAnimation();
    const { openModal } = useModal();
    const cookies = useCookies();
    const locale = cookies.get('locale');

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        } else {
            mainControls.start('hidden');
        }
    }, [isInView])
    return (
        <div className="villa_section" ref={forwardRef}>
            <div className="villa_width">
                <div className="row_one">

                </div>
                <div className="traslated_container">
                    <div className="row_two">
                        <p >{data[1]?.attributes?.moto} </p>
                    </div>
                    <div className="row_three">
                        <div>
                            <motion.div
                                className={`row_three_image`}
                                initial="hidden"
                                animate={mainControls}
                                variants={{
                                    hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
                                    visible: { clipPath: 'inset(0% 0% 0% 0%)' },
                                }}
                                transition={{ duration: 1, ease: 'anticipate' }}
                            >
                                <Image
                                    src="/3.webp"
                                    alt="Picture of the second villa"
                                    fill={true}
                                />
                            </motion.div>
                            <div className="row_three_content">
                                <div onClick={openModal} className="book_getaway">
                                    <p >{text[locale].btn1}.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const SectionFour = ({data}) => {
    const cookies = useCookies();
    const locale = cookies.get('locale');
    const ref = useRef(null);
    const [scope, animate] = useAnimate();
    const isInView = useInView({
        ref: ref,
        threshold: 0.5
    });
    useEffect(() => {
        if (isInView) {
            animate(scope.current, {
                opacity: 1,
            }, {
                duration: 1,
                ease: 'easeInOut'
            })
        }
    }, [isInView])
    return (
        <div className="section_four_container" ref={ref}  >
            <div ref={scope} className="section_four_inner">
                <div>
                    <div>
                        <span className="header">{data[2]?.attributes?.title}</span>
                        <p>
                        {data[2]?.attributes?.moto}
                        </p>
                    </div>
                    <div>
                        <span className="header">{data[3]?.attributes?.title}</span>
                        <p>{data[3]?.attributes?.moto}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const SectionFive = () => {
    const cookies = useCookies();
    const locale = cookies.get('locale');
    const forwardRef = useRef(null);
    const isInView = useInView(forwardRef);
    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        } else {
            mainControls.start('hidden');
        }
    }, [isInView])
    return (
        <section className="section_five_container" ref={forwardRef}>
            <div className="section_five_container_row_1">
                <div className="section_five_container_row_1_left">
                    <span>{text[locale].text3}</span>
                    <p>{text[locale].text4}</p>
                </div>
                <div className="section_five_container_row_1_right">
                    <div>
                        <Image
                            src={"/6.webp"}
                            fill={true}
                        />
                    </div>
                </div>
            </div>
            <div className="section_five_container_row_2">

                <motion.div
                    initial="hidden"
                    animate={mainControls}
                    variants={{
                        hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
                        visible: { clipPath: 'inset(0% 0% 0% 0%)' },
                    }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                >
                    <Image
                        src="/5.webp"
                        alt="Picture of the second villa"
                        fill={true}
                    />
                </motion.div>
            </div>
        </section>
    )
}



const images = [
    {
        image: "/1.webp",
        title: "Wellbeing"
    },
    {
        image: "/2.webp",
        title: "relax"
    },
    {
        image: "/3.webp",
        title: "enjoy"
    },
    {
        image: "/4.webp",
        title: "pool"
    },
    {
        image: "/5.webp",
        title: "pool"
    },
    {
        image: "/6.webp",
        title: "pool"
    },
    {
        image: "/7.webp",
        title: "pool"
    },
]

export const SectionSix = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);
    return (
        <section ref={targetRef} className="section_six_container">
            <div className="section_six_sticky">

                <motion.div style={{ x }} className="section_six_motion">

                    {images.map((item, index) => {
                        if (index % 2 == 1) {
                            return (
                                <Item2 key={index} image={item.image} title={item.title} />
                            )
                        } else {
                            return (
                                <Item key={index} image={item.image} title={item.title} />
                            )
                        }
                    })
                    }
                </motion.div>
            </div>
        </section>
    )
}


const Item = ({ image, title }) => {
    return (
        <div className="section_six_sticky_item">
            <Image
                src={image}
                fill={true}
                sizes={"800px 400px (max-width: 800px) 400px 200px"}
            />
            <span>{title.toUpperCase()}</span>
        </div>
    )
}

const Item2 = ({ image, title }) => {
    return (
        <div className="section_six_sticky_item_2">
            <Image
                src={image}
                fill={true}
                sizes={"500px 700px (max-width: 800px) 250px 350px"}
            />
            <span>{title.toUpperCase()}</span>
        </div>
    )
}
export default SectionThree