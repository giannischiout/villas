
import Link from 'next/link'
const FooterNew = () => {
    return (
        <div className="footer_new_container">
            <div>
                <div>
                    <span>IOANIAN DREAM VILLAS</span>
                    <Link href={"/policy/terms"}>Terms and conditions</Link>
                    <Link href={"/policy/disclaimer"}>Privacy Settings</Link>
                    <Link href={"/policy/cookie-policy"}>Cookies Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default FooterNew