'use client'
import Link from 'next/link';
import Image from 'next/image';

const NavMenu = ({ isOpen, setIsOpen }) => {

	const handleClose = () => {
		setIsOpen(prev => !prev)
	}
	return (
		<>
			{isOpen ? (
				<div className="menu_container">
					<div className="menu_center_inner">
						<Image src="/logo2.png" alt="logo" width={200} height={120} />
						<div className="menu_content">
							<Link onClick={handleClose} href={`/`}>HOME</Link>
							<Link  onClick={handleClose} href={`/allvillas`}>VILLAS</Link>
							<Link  onClick={handleClose} href={`/posts/all`}>WHAT TO DO</Link>
							<Link  onClick={handleClose} href={`/pricelist`}>PRICE LIST</Link>
							<Link  onClick={handleClose} href={`/contact`}>CONTACT</Link>
						</div>
					</div>
					<span className="menu_background_text">MENU</span>
				</div>
			) : null}
		</>
	)
}





export default NavMenu;