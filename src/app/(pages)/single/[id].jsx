import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
    const {id} = router.query;

    console.log('idsefsefsfs')
    console.log(id)

    return (
        <div>
            <h1>SinglePost</h1>
        </div>
    )
}


export default Page;