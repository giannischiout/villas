'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useCookies } from 'next-client-cookies';
import { text } from '@/translations';
const NavMenu = ({ isOpen, setIsOpen }) => {
	const cookies = useCookies();
    const locale = cookies.get('locale')  || 'locale=en';
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
							<Link onClick={handleClose} href={`/`}>{text[locale].menuHome}</Link>
							<Link  onClick={handleClose} href={`/allvillas`}>{text[locale].menuVillas}</Link>
							<Link  onClick={handleClose} href={`/posts/all`}>{text[locale].menuWhatToDo}</Link>
							<Link  onClick={handleClose} href={`/pricelist`}>{text[locale].menuPriceList}</Link>
							<Link  onClick={handleClose} href={`/contact`}>{text[locale].menuContact}</Link>
						</div>
					</div>
					<span className="menu_background_text">MENU</span>
				</div>
			) : null}
		</>
	)
}





export default NavMenu;