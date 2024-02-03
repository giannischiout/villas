
import Link from 'next/link'
const FooterNew = () => {
    return (
        <div className="footer_new_container">
            <div>
                <div>
                    <span>IOANIAN DREAM VILLAS</span>
                    <Link href={"#"}>Terms and conditions</Link>
                    <Link href={"#"}>Privacy Settings</Link>
                    <Link href={"#"}>Cookies Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default FooterNew