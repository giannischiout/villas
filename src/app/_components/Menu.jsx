'use client'
import { GoArrowUpRight } from "react-icons/go";
import{motion} from 'framer-motion';

const NavMenu = () => {
	
	const variants = {
		open: { 
			opacity: 1, 
			x: 0,
			position: "fixed",
			top: 0,
			zIndex: 999, 
		},
		closed: { opacity: 0, x: "-100%" },
	
	}

	return (
		<section 
	
		className="testppp" >
			<div className="menu_container">
				<div className="menu_top">
					<div>

					</div>
				</div>
				<div className="menu_center">
					<div className="menu_center_inner">
						<div className="menu_item">
							<div className="menu_title">
								<h1>EXPLORE OUR VILLAS</h1>
							</div>
							<div className="menu_content">
								<span>Jira</span>
								<span>Molto</span>
								<span>Quisnikov</span>
							</div>
						</div>
						<div className="menu_item">
							<div className="menu_title">
								<h1>EXPLORE OUR VILLAS</h1>
							</div>
							<div className="menu_content">
								<span>Jira</span>
								<span>Molto</span>
								<span>Quisnikov</span>
							</div>
						</div>
					</div>

				</div>
			</div>
			<video className="menu_video" autoPlay loop muted>
				<source src={'/sea.mp4'} type="video/mp4" />
			</video>
		</section>
	)
}



export default NavMenu;