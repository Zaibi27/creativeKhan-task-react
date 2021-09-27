import {useRouter} from "next/router" ;
export default function Index({body , title , id}) {
    const router = useRouter()
    return (
        <div onClick={()=>router.push("/viewPost/" + id)} className="cursor-pointer lg:w-6/12 bg-gray-700 py-4 px-2 border border-gray-300 rounded-md">
            <h1 className="text-gray-100 text-xl font-semi-bold">{title}</h1>
            <p className="text-gray-100 text-sm mt-2">{body}</p>
        </div>
    )
}
