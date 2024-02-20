import Image from 'next/image';
import BookCircle from '@/app/_components/BookCircle';
import { cookies } from 'next/headers';

const fetchPrices = async () => {
    "use server";
    const cookieStore = cookies()
    const locale = cookieStore.get('locale')
   
    const url = `${process.env.API_URL}/pricings?${locale?.value}&populate=*`
    
    let data = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }, {
        cache: 'no-cache'
    })

    let json = await data.json()

    return json.data;
}
const Page = async () => {
    const data = await fetchPrices()
    console.log(data)
    return (
        <div className="pricelist_container">
            <div className='price_list_intro'>
                <Image src="/logovillas.png" alt="logovillas" width={150} height={80} />
                <h1>PRICE LIST</h1>
            </div>
            <PriceCard title="Castro" backColor={"#f7f6f5"} />
            <PriceCard title="Castro" backColor={"#ffffff"} />
            <PriceCard title="Castro" backColor={"#f7f6f5"} />

        </div>
    )
}


const PriceCard = ({title, backColor}) => {
    return (
        <div className="price_list" style={{backgroundColor: backColor}}>
        <div>
            <div className="price_list-first-column">
               <div>
               <span className="price_list-header">{title}</span>
                <div>
                        <span>From: 03 - 01 -2024 to: 30-06-2024</span>
                        <span className="price">€1,100.00</span>
                    </div>
                    <div>
                        <span>From: 03 - 01 -2024 to: 30-06-2024</span>
                        <span className="price">€1,100.00</span>
                    </div>
                    <div>
                        <span>From: 03 - 01 -2024 to: 30-06-2024</span>
                        <span className="price">€1,100.00</span>
                    </div>
                    <div>
                        <span>From: 03 - 01 -2024 to: 30-06-2024</span>
                        <span className="price">€1,100.00</span>
                    </div>
               </div>
               
            </div>
            <div className="price_list-second-column">
                <p className="special_terms">SPECIAL TERMS</p>
                <div>
                    <span>{`Deposit (on site):`}</span>
                    <span className="terms_price">{'300.00€'}</span>
                </div>
                <div>
                    <span>{`Cleaning on site:`}</span>
                    <span className="terms_price">{'145.00€'}</span>
                </div>
                <div>
                    <span>{`Cleaning on site with dog:`}</span>
                    <span className="terms_price">{'190.00€'}</span>
                </div>
                <div>
                    <span>{`Discount 3 weeks:`}</span>
                    <span className="terms_price">{'5%'}</span>
                </div>
                <div>
                    <span>{`Discount 4 weeks:`}</span>
                    <span className="terms_price">{'10%'}</span>
                </div>
            </div>
            <div className="price_list-third-column">
                <BookCircle />
            </div>
        </div>
    </div>
    )
}


export default Page;