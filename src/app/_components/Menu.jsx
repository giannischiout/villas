'use client'
import { GoArrowUpRight } from "react-icons/go";
import{motion} from 'framer-motion';

const NavMenu = ({isOpen}) => {
	
	const variants = {
		open: { 
			
			
		},
		closed: { opacity: 0,  },
	
	}

	return (
		<div className="testppp">
			<motion.div
			variants={variants}
			animate={isOpen ? "open" : "closed"}
			 >
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
								<h1>EXPLORE MORE</h1>
							</div>
							<div className="menu_content">
								<span>Jira</span>
								<span>Molto</span>
								<span>Quisnikov</span>
							</div>
						</div>
						<div className="menu_item">
							<div className="menu_title">
								<h1>EXPLORE MORE</h1>
							</div>
							<div className="menu_content">
								<span>Jira</span>
								<span>Molto</span>
							
							</div>
						</div>
					</div>

				</div>
			</div>
			<video className="menu_video" autoPlay loop muted>
				<source src={'/sea.mp4'} type="video/mp4" />
			</video>
		</motion.div>
		</div>
	)
}



export default NavMenu;