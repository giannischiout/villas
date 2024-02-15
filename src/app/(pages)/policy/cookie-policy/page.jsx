import Link from 'next/link';
const Page = () => {
    return (
        <div className="policy_container">
            <div>
                <h1>Cookie Policy</h1>
                <span>1. Introduction</span>
                <p>This Cookie Policy explains how Ionian Dream Villas (we,us, or our) uses cookies and similar
                technologies on our website located at <Link href="https://ionian-dream-villas.com/en/">https://ionian-dream-villas.com/en/</Link></p>
                <span>2. What are Cookies?</span>
                <p>{"Cookies are small text files that are stored on your device (computer, smartphone, tablet, etc.) when you visit a website. They allow the website to remember your actions and preferences (such as login, language, font size, and other display preferences) over a period of time, so you don't have to keep re-entering them whenever you come back to the site or browse from one page to another."}</p>
                <span>3. What Cookies Do We Use?</span>
                <p>{"We use the following types of cookies on our websiteEssential Cookies: These cookies are strictly necessary for the operation of our website. They enable you to navigate around the website and use its essential features, such as accessing secure areas. Without these cookies, our website would not function properly.Performance Cookies: These cookies collect information about how you use our website, such as which pages you visit and how long you stay on them. This information helps us to improve the performance of our website and make it more user-friendly. We use Google Analytics for this purpose. "}</p>
                <span>4. How to Manage Cookies</span>
                <p>{`ou can control and/or delete cookies at your own discretion. You can find out how to do this by consulting your browser's help documentation. You can also opt-out of Google Analytics cookies by visiting the Google Analytics opt-out page: [https://tools.google.com/dlpage/gaoptout].
                `}</p>
                <span>5. Changes to this Cookie Policy</span>
                <p>{`We may update this Cookie Policy from time to time. The updated Cookie Policy will be posted on our website. 
                We recommend that you review this Cookie Policy regularly to stay informed about how we use cookies and similar technologies.`}</p>
                <span>6. Contact Us</span>
                <p>If you have any questions about this Cookie Policy, please contact us through the information provided on our website.
Please note that this cookie policy is just a template and you may need to modify it to fit your specific needs. For example, you may want to add more information about the specific cookies you use and how long they are stored. You should also consult with a lawyer to ensure your cookie policy is compliant with all applicable laws and regulations.
</p>
            </div>
        </div>
    )
}

export default Page;