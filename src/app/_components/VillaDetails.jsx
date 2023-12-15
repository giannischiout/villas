'use client'

import { useState } from "react"


const facilities = [
    { feature: "apple tv" },
    { feature: "dvd player" },
    { feature: "electronic room control touch panel" },
    { feature: "apple iPad" },
    { feature: "wi-fi internet connection" },
]

const details = {
    maxAdults: 6,
    maxChildren: 3,
    bedrooms: 3,
    pullOutCoutch: 1,
    squareMeters: 200,
    bathRooms: '2 bathrooms, bathtub or shower / WC',
    guestToilet: '1 guest toilet',
}

const roomTypes = [
    'Gallery Couch ',
    'Master Bedroom',
    'Gallery Double Room'

]




export function VillaDetails() {
    return (
        <>
            <h4 >Details</h4>
            <ul>
                <li>
                 Square meters:
                  <span className="v_details"> {details.squareMeters}</span>
                </li>
                <li>
                   Max adults:
                  <span className="v_details"> {details.maxAdults}</span>
                </li>
                <li>
                   Max children:
                  <span className="v_details"> {details.maxChildren}</span>
                </li>
                <li>
                    Bedrooms:
                  <span className="v_details"> {details.bedrooms}</span>
                </li>
                <li>
                  Bathrooms:
                  <span className="v_details"> {details.bathRooms}</span>
                </li>
                <li>
                    Guest Toilet:
                  <span className="v_details"> {details.guestToilet}</span>
                </li>
            </ul>
        </>
    )
}



export function VillaFeatures() {
    const [data, setData] = useState(roomTypes)
    return (
        <>
            <h5>Room Features</h5>
            <ul>
                {data.map((item, index) => {
                    return (
                        <li key={index}>
                            {item}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}