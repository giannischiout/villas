import { useEffect, useState, useRef } from "react";

const useLocoScroll = ({ref, smooth}) => {
    const [locomotiveScrollRef, setRef] = useState(null);
    useEffect(() => {
        if(ref?.current) {
            import("locomotive-scroll").then(locomotiveModule => {
                const scroll = new locomotiveModule.default({
                    el: ref.current,
                    smooth,
                    lerp: 0.05,
                    smooth: true,
                    smartphone: {
                        smooth: true,
                    },
                    tablet: {
                        smooth: true,
                    }
                
                })
                setRef(scroll)
            })
            return () => {
                locomotiveScrollRef?.destroy();
            }
        }
    }, [ref])
    return [locomotiveScrollRef]
}


export default useLocoScroll;