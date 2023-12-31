'use client'
import Image from 'next/image'
import { useEffect, useLayoutEffect, useRef } from 'react'
import { useScroll } from 'framer-motion';
import { motion, useAnimate, animate } from 'framer-motion'

export default function Intro() {
	const { scrollYProgress } = useScroll();
	const ref = useRef(null);
	const [scope, animate] = useAnimate();
	const scrollContainerRef = useRef(null);

	const introGrid = async () => {
		await animate('.intro_grid', {
			opacity: 1,
			y: [400, 0],
			
		},{
			delay: 0.5,
			duration: 0.8,
			ease: 'easeIn',
		})
		await animate('.intro_image', {
			y: -250
			
		},
		{	
			duration: 0.8,
			ease: 'easeIn',
		})
	   
	}

	const introAnimation = async () => {
		await animate('.intro_image', {
			width: '45%',
			height: 250,
			top: '50%',

		},
		{
			duration: 0.8,
			ease: [0.6, 0.05, -0.03, 0.9],
		})
		

		
		
			
		
	}

	const handleScrollToTop = () => {
		if (scrollContainerRef.current) {
		  scrollContainerRef.current.scrollTop = 0;
		}
	  };

	useEffect(() => {
		
		scrollYProgress.on('change', (v) => {
			if (v > 0.01 && v < 0.02) {
				introAnimation()
				introGrid()
			}
		})
	}, [scrollYProgress])

	return (
		<div ref={scope} className='intro_container'>
			<div  className='intro_inner'>
				<div className='intro_image'>
					<Image
						id="image_scale"
						src='/slider1.webp'
						fill={true}
					/>
				</div>
				<div className='intro_grid'>
					<div className='intro_top'>
						<div className='intro_top_inner'>
							<p className='intro_top_inner_text'>LOOK</p>
							<p className='intro_top_inner_absolute_text'>BEYOND LIMITS.</p>
						</div>
					</div>
					<div className='intro_mid'>
						<div className='intro_mid_image'>
							{/* <video autoPlay >
								<source src='/sea.mp4' type='video/mp4' />
							</video> */}
						</div>
						<div className='intro_mid_text'>
							<p>FIND</p>
						</div>
					</div>
					<div className='intro_bottom'>
						<p>TRUE PERFECTION.</p>
					</div>	
				</div>
			</div>
		</div>
	)
}
