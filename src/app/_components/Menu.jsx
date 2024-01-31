'use client'

import { FaMapMarkerAlt } from "react-icons/fa";
import Link from 'next/link';


const NavMenu = ({ isOpen, setIsOpen }) => {
	const coordinates = `${38.828126301276285},${20.67299302578312}`;

	const handleClose = () => {
		setIsOpen(prev => !prev)
	}
	return (
		<>
			{isOpen ? (
				<div className="menu_container">
					<div className="menu_center_inner">
						<div className="menu_content">
							<Link onClick={handleClose} href={`/villas/castro`}>CASTRO VILLA</Link>
							<Link  onClick={handleClose} href={`/villas/jira`}>JIRA VILLA</Link>
							<Link  onClick={handleClose} href={`/villas/milos`}>MILOS VILLA</Link>
							<Link  onClick={handleClose} href={`/posts/all`}>AREAS OF INTEREST</Link>
							<Link  onClick={handleClose} href={`/location`}>LOCATIONS</Link>
						</div>
						<div className="menu_coordinates">
						<FaMapMarkerAlt />
						<span className="click_to_open">OPEN GOOGLE MAPS</span>
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