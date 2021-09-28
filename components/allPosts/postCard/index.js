import {useRouter} from "next/router" ;
export default function Index({body , title , id}) {
    const router = useRouter()
    return (
        <div className="cursor-pointer lg:w-6/12 bg-gray-700 py-4 px-2 border border-gray-300 rounded-md">
            <h1 className="text-gray-100 text-xl font-semi-bold">{title}</h1>
            <p className="text-gray-100 text-sm mt-2">{body}</p>
            <div className="w-full flex space-x-2 items-center justify-end mt-3">
                <button onClick={()=>router.push("/viewPost/" + id)}  className="bg-indigo-600 py-2 px-4 rounded">View</button>
                <button onClick={() => router.push("/posts/update/" + id)} className="bg-blue-600 py-2 px-4 rounded">Update</button>
                <button className="bg-red-400 py-2 px-4 rounded">Delete</button>
            </div>
        </div>
    )
}
