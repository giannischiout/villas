import Image from 'next/image';
import BookCircle from '@/app/_components/BookCircle';
import { cookies } from 'next/headers';
import { text } from '@/translations';
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
    
    const dates = data.map((item) => {
        return {
            from: item.attributes.fromDate,
            to: item.attributes.toDate,
            price: item.attributes.pricePerVilaPerWeek[0].pricePerWeek,
            pricingTerms: item.attributes.pricingTerms
        }
    })

    const pricingTerms = data.map((item) => {
        return item.attributes.pricingTerms.map((term) => {
            return {
                term: term.termLabel,
                price: term.termdescription
            }
        })
    })
    return (
        <div className="pricelist_container">
            <div className='price_list_intro'>
                <Image src="/logovillas.png" alt="logovillas" width={150} height={80} />
                <h1>PRICE LIST</h1>
            </div>
            <PriceCard title="Castro" backColor={"#f7f6f5"} dates={dates}  pricingTerms={pricingTerms[0]} />
            <PriceCard title="Jira" backColor={"#ffffff"} dates={dates} pricingTerms={pricingTerms[1]} />
            <PriceCard title="Milos" backColor={"#f7f6f5"} dates={dates} pricingTerms={pricingTerms[2]} />

        </div>
    )
}


const PriceCard = ({ title, backColor, dates, pricingTerms }) => {
    const cookieStore = cookies()
    const locale = cookieStore.get('locale')?.value || 'locale=en'
    return (
        <div className="price_list" style={{ backgroundColor: backColor }}>
            <div>
                <div className="price_list-first-column">
                    <div>
                        <span className="price_list-header">{title}</span>
                        {dates.map((date, index) => {
                            return (
                                <div key={index}>
                                    <span>{`From: ${date.from} to: ${date.to}`}</span>
                                    <span className="price">{`€${date.price}`}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="price_list-second-column">
                    
                    <p className="special_terms">{text[locale].specialTerms}</p>
                    {pricingTerms.map((term, index) => {
                        return (
                            <div key={index}>
                                <span>{term.term}</span>
                                <span className="terms_price">{term.price}</span>
                            </div>
                        )
                    })}
                </div>
                <div className="price_list-third-column">
                    <BookCircle />
                </div>
            </div>
        </div>
    )
}


export default Page;