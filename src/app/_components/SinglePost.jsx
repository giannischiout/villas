import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import axios from 'axios'
const SinglePost = () => {
    const router = useRouter();
    const {id} = router.query;

    console.log(id)

    const handleFetch = async () => {
        const { data } = await axios.get(`https://strapi.3v7i.com/api/posts/${id}`)
        console.log(data)
    }
    useEffect(() => {
        handleFetch
    }, [])
    return (
        <div>
            <h1>SinglePost</h1>
        </div>
    )
}


export default SinglePost;