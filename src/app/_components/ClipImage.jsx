'use client'
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { useAnimate, useScroll,  animate, useAnimation, useInView, motion } from 'framer-motion';

export const ClipImage = ({img, forwardRef, duration = 1, className }) => {
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
        <motion.div 
            className={`${className}`}
            ref={forwardRef}
            initial="hidden"
            animate={mainControls}
            variants={{
                hidden: { clipPath: 'inset(100% 0% 0% 0%)'},
                visible: { clipPath: 'inset(0% 0% 0% 0%)'},
            }}
            transition={{ duration: duration, ease: 'anticipate' }}
        >
                      <Image
                          src={img}
                          fill={true}
                          sizes='100%'
                          alt={`an image of the ioannian villa`}
                      />
        </motion.div>
    )
}
export const ClipImageNoView = ({img, forwardRef, duration = 1, className }) => {
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
        <motion.div 
            className={`${className}`}
            ref={forwardRef}
            initial="hidden"
            animate={mainControls}
            variants={{
                hidden: { clipPath: 'inset(100% 0% 0% 0%)'},
                visible: { clipPath: 'inset(0% 0% 0% 0%)'},
            }}
            transition={{ duration: duration, ease: 'anticipate' }}
        >
                      <Image
                          src={img}
                          fill={true}
                          sizes='100%'
                          alt={`an image of the ioannian villa`}
                      />
        </motion.div>
    )
}