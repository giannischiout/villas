
import BookNowModal from "@/app/_components/BookNow";

const fetchData = async () => {
    "use server";
    const url = `${process.env.API_URL}/hotel?populate=*`
  
  
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
    const data = await fetchData()
 
  let dates = {
    opening: data?.attributes?.openingDate,
    closing: data?.attributes?.closingDate
  }
    return (
        <div className="book_page_container">
            <BookNowModal dates={dates} />
        </div>
    )
}


export default Page;