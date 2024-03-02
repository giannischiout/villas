'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useCookies } from 'next-client-cookies';
import { text } from '@/translations';
import { createLocale } from '../actions';

const NavMenu = ({ isOpen, setIsOpen }) => {
	const cookies = useCookies();
	const locale = cookies.get('locale') || 'locale=en';
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
							<Link onClick={handleClose} href={`/allvillas`}>{text[locale].menuVillas}</Link>
							<Link onClick={handleClose} href={`/posts/all`}>{text[locale].menuWhatToDo}</Link>
							<Link onClick={handleClose} href={`/pricelist`}>{text[locale].menuPriceList}</Link>
							<Link onClick={handleClose} href={`/contact`}>{text[locale].menuContact}</Link>
								<Locale />
						</div>
					</div>
					<span className="menu_background_text">MENU</span>
				</div>
			) : null}
		</>
	)
}


const Locale = () => {
	const cookies = useCookies();
	const locale = cookies.get('locale') || 'locale=en';

	const handleEn = () => {
        createLocale('locale=en')

    }
    const handleEl = () => {
        createLocale('locale=el')
    }
    const handleDe = () => {
        createLocale('locale=de')
    }
	return (
		<div className="lang_mobile">
		<button
			onClick={handleEn}
			className={locale === 'locale=en' }
		>
			{text[locale]?.localeBtnEn}
		</button>
		<hr />
		<button
			onClick={handleEl}
			className={locale === 'locale=el' ? 'lang_active' : ''}
		>
			  {text[locale]?.localeBtnEl}
		</button>
		<hr />
		<button
			onClick={handleDe}
			className={locale === 'locale=de' ? 'lang_active' : ''}
		>
			  {text[locale]?.localeBtnDe}
		</button>
	</div>
	)
}


export default NavMenu;