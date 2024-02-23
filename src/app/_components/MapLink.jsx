
'use client'
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';


const MapLink = () => {
        const coordinates = `${38.828126301276285},${20.67299302578312}`;
     
    return (
        <Link href={`https://www.google.com/maps?q=${coordinates}`} target='blank' className="maps_button">
        view
        <GoArrowUpRight />
    </Link>
    )
}


export const PostMapLinlk = ({latt, long}) => {
    const coordinates = `${latt},${long}`;

    <Link href={`https://www.google.com/maps?q=${coordinates}`} target='blank' className="maps_button">
        google maps
    <GoArrowUpRight />
</Link>
}




export default MapLink;