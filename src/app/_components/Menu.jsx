'use client'
import { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion, stagger } from 'framer-motion';
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from 'next/link';
const NavMenu = ({ isOpen }) => {
	
	const coordinates = `${38.828126301276285},${20.67299302578312}`;


	return (
		<>
			{isOpen ? (
				<div className="menu_container">
					<div className="menu_center_inner">
						<div className="menu_content">
							<span>Castro Villa</span>
							<span>Jira Villa</span>
							<span>Milos Villa</span>
							<span>Blog</span>
							<span>Contact</span>
						</div>
						<div className="menu_coordinates">
						<FaMapMarkerAlt />
						<Link href={`https://www.google.com/maps?q=${coordinates}`} target="blank">{`38° 49' 41.05'' N / 20° 40' 22.77'' E`}</Link>
						</div>
					</div>
					<span className="menu_background_text">MENU</span>
				</div>
			) : null}
		</>
	)
}





export default NavMenu;