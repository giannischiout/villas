import Villa from "@/app/_components/Villa"

const text = {
    tag: 'AN OASIS OF PIECE AND QUIET',
    title: "Barefoot luxury, elevated",
    description: `This beautiful villa with a private pool is located in a quiet location, 
    just a few minutes walk from the beach. The villa has three bedrooms, two bathrooms, a guest WC, a living room with an open, fully equipped kitchen, 
    a dining and living area with an open fireplace, extending onto a 
    large wooden deck terrace, and a workspace on the gallery.`
    
}



const roomTypes = [
    'Gallery Couch ',
    'Master Bedroom',
    'Gallery Double Room'

]

const details = {
    maxAdults: 6,
    maxChildren: 3,
    bedrooms: 3,
    pullOutCoutch: 1,
    squareMeters: 200,
    outdoorSqr: 40,
    bathRooms: '2 bathrooms, bathtub or shower / WC',
    guestToilet: '1 guest toilet',
    facilities: [
        'Safety Deposit Box',
        'Storage Room',
        'SAT-TV',
        'Toaster',
        'Washing Machine'
    ]
}

const facilities = [
    'Safety Deposit Box',
    'Storage Room',
    'SAT-TV',
    'Toaster',
    'Washing Machine'
]

const images = [
    '/jira/jira_1.webp',
    '/jira/jira_2.webp',
    '/jira/jira_3.webp',
    '/jira/jira_4.webp',
    '/jira/jira_5.webp',
    '/jira/jira_6.webp',

]
export default function Page() {
    return (
        <Villa 
            id="jira"
            tag={text.tag}
            name="jira" 
            sidebarImg="/jira/jira_1.webp"
            mainImg="/jira/jira_7.webp"
            scrollImg="/jira/jira_6.webp"
            facilitiesImg="/jira/jira_6.webp"
            title={text.title}
            description={text.description}
            details={details}
            roomTypes={roomTypes}
            imagesSlider={images}
            outdorSqr={200}
            interiorSqr={200}
            />
    )
}