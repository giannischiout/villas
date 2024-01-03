import { useAnimate, useScroll, useTransform, motion } from "framer-motion";
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
    return (
        <div className="villa_section">
            <div className="villa_width">
                <div className="row_one">
                    <div className="row_one_image">
                        <Image
                            src="/8.webp"
                            alt="Picture of the first villa"
                            fill={true}
                        />
                    </div>
                    <div className="row_one_text">
                        <h2>Consept</h2>
                    </div>
                </div>
                <div className="traslated_container">
                    <div className="row_two">
                        <p data-scroll data-speed="0.2 ">Understand chick is our design ethos and subtle details are our mantra</p>
                    </div>
                    <div className="row_three">
                        <div className="row_three_image">
                            <Image
                                src="/3.webp"
                                alt="Picture of the second villa"
                                fill={true}
                            />
                        </div>
                        <div className="row_three_content">
                            <p >We ensure everything about your stay is immaculate, from the
                                pillowy white Etro cotton sheets dressing your bed to the throughouly placed
                                garden-grown herb garnishes on your plate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const SectionFour = () => {
    return (
        <section className="section_four_container">
            <div className="section_four_col_1">
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


export const SectionFive = () => {
    return (
        <section className="section_five_container">
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
                <div>
                    <Image
                        src={"/5.webp"}
                        fill={true}
                    />
                </div>
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
                                <Item key={index}  image={item.image} title={item.title} />
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
            />
            <span>{title.toUpperCase()}</span>
        </div>
    )
}
export default SectionThree