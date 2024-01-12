import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import axios from 'axios'
const SinglePost = () => {
    const router = useRouter();
    const {id} = router.query;

    console.log('id')
    console.log(id)

    return (
        <div>
            <h1>SinglePost</h1>
        </div>
    )
}


export default SinglePost;