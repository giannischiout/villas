'use client'
import { useAnimate, useScroll, useTransform, motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";


export const SectionTwo = () => {
    return (
        <section className="section_two_container">
            <div className="section_two_col_1">
                <div>
                    <span>Tastemakers of Understated Chic Luxury</span>
                    <p>Sitting atop the curvaceous cliffs of Italy’s Amalfi Coast,
                        Casa Angelina offers a sublime slice of modern minimalism on the Mediterranean, with an emphasis on barefoot luxury and top-level gastronomy.</p>
                    <p>Sitting atop the curvaceous cliffs of Italy’s Amalfi Coast, Casa Angelina offers a sublime slice of modern minimalism on the Mediterranean, with an emphasis on barefoot luxury and top-level gastronomy.</p>
                    <p>We work to ensure everything about your stay is true perfection, from our welcome amenities and the thoughtful turndown services to the curated dishes from our chefs and activities organized by our concierge.</p>
                </div>
            </div>
        </section>
    )
}




const SectionThree = () => {
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
        <div className="villa_section" ref={forwardRef}>
            <div className="villa_width">
                <div className="row_one">
                    {/* <div className="row_one_image">
                        <Image
                            src="/8.webp"
                            alt="Picture of the first villa"
                            fill={true}
                        />
                    </div>
                    <div className="row_one_text">
                        <h2>Consept</h2>
                    </div> */}
                </div>
                <div className="traslated_container">
                    <div className="row_two">
                        <p data-scroll data-speed="0.2 ">Experience the perfect blend of comfort, nature, and captivating views during your stay at Ionian Dream Villas in Lefkada. </p>
                    </div>
                    <div className="row_three">
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
                            <p >Book your getaway today and indulge in the beauty of Agios Ioannis Bay.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const SectionFour = () => {
    const ref  = useRef(null);
    const [scope, animate] = useAnimate();
    const isInView = useInView({
        ref: ref,
        threshold: 0.5
    });
    useEffect(() => {
        console.log(isInView)
        if(isInView) {
            console.log('in view')
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
            <div ref={scope} className="section_four_col_1">
                <div>
                    <span>Breathtaking Views:</span>
                    <p>
                        One of the highlights of Ionian Dream Villas is the breathtaking view of Agios Ioannis bay. Step onto your private terrace, and you'll be greeted by an awe-inspiring panorama that captures the heart and soul of Lefkada. Whether you're sipping your morning coffee or enjoying a sunset cocktail, the view from our villas will leave you spellbound.
                    </p>
                    <span>Immersed in Nature</span>
                    <p>Our villas are not just a place to stay; they are an opportunity to connect with the natural beauty of Lefkada. Surrounded by verdant landscapes and fragrant local flora, Ionian Dream Villas offer a sensory experience like no other. The soothing sounds of nature, the gentle caress of the island breeze, and the scents of blooming plants create an atmosphere of tranquility and serenity.</p>
                </div>
            </div>
        </div>
    )
}


export const SectionFive = () => {
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
                    <p>RETREATS</p>
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