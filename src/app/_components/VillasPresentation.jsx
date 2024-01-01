import Image from "next/image"


const VillasPresentation = () => {
    return (
        <section>
            <div className="v_presentation_container">

                <div className="v_presentation_inner">
                    <div className="v_presentation_top">
                        <div >
                            <p>OUR</p>
                            <h5>VILLAS</h5>
                        </div>
                        <div >
                            <div className="v_presentation_image_container">
                                <Image src={'/1.webp'} alt="villa1" fill={true} />
                            </div>
                        </div>
                    </div>
                    <div className="v_presentation_sticky">
                        <div className="v_presentation_bottom">
                            <div></div>
                            <div>
                                <h6>TRANQULITY</h6>
                                <p>
                                    Fine dining, Amalfi style.
                                    At Casa Angelina, the rich flavors and ingredients of
                                    Campania inspire every.
                                </p>
                            </div>
                        </div>
                        <div className="v_presentation_villas">
                            <div className="v_presentation_villas_inner">
                                <div>
                                    <Card />
                                    <Card />
                                    <Card />
                                </div>
                                <div>sefsesfs</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}


const Card = () => {
    return (
        <div className="villas_card_container">
            <div className="v_presentation_card_image_container">
                <Image src={'/1.webp'} alt="villa1" fill={true} />
            </div>
            <div></div>
        </div>
    )
}

export default VillasPresentation