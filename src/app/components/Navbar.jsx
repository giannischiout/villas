'use client'
import { Menu } from 'lucide-react';
import { useState } from 'react';


const Navbar = () => {
    return (
        <div className="navbar_container">
            <div className="burger">
                < Burger />
            </div>
            <div className="navbar_inner_right">
                <div className='tagline_container'>
                    <div>
                        <h1 className="tagline">Ionian Villas</h1>
                    </div>
                    <div>
                        <Languages />
                    </div>
                </div>
                <div>c</div>
            </div>
        </div>
    )
}


const Languages = () => {
    const [ lang, setLang] = useState('en')

    const handleLang = (e) => {
        setLang(prev => prev == 'en' ? 'gr' : 'en')
    }
    return (
        <div className='languages'>
            <div onClick={handleLang} className={`lang ${lang == 'en' ? "lang_undeline" : null}`}>
                <span >English</span>
            </div>
            <div className="hor_seperator"></div>
            <div  onClick={handleLang} className={`lang ${lang == 'gr' ? "lang_undeline" : null}`} >
                <span >Greek</span>
            </div>
        </div>
    )
}

const Burger = () => {
    return (
        <div>
            <Menu strokeWidth={1} />
        </div>
    )
}

export default Navbar