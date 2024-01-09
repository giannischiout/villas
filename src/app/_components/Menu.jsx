'use client'
import { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion, stagger } from 'framer-motion';
import BookNowModal from "./BookNow";
const NavMenu = ({ isOpen }) => {
	const staggerMenuItems = stagger(0.08);

	// Function to handle scrolling
	
	

	return (
		<>
			{isOpen ? (

				<div className="menu_container">
					<div className="menu_center_inner">
						<h1>Menu</h1>
						<div className="menu_content">
							<span>Castro Villa</span>
							<span>Jira Villa</span>
							<span>Milos Villa</span>
							<span>Blog</span>
							<span>Contact</span>
						</div>
					</div>
				</div>
			) : null}
		</>
	)
}



export default NavMenu;