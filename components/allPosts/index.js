import { useEffect, useState } from 'react';
import { selectPostsList  , createPost} from "../../features/posts/postSlice"
import { useSelector, useDispatch } from "react-redux"
import Card from "./postCard"
import {useRouter} from "next/router" ; 
export default function Index() {
    const postList = useSelector(selectPostsList)
    const dispatch = useDispatch();
    const [posts, setPosts] = useState();
    const router = useRouter() ; 
    useEffect(() => {
        if (postList) {
            setPosts(postList);
        }
    }, [dispatch, postList])
    return (
        <div className="container mx-auto py-4">
            <div className="flex items-center space-x-4">
                <h1 className="text-3xl font-semibold">All Posts</h1>
                <button onClick={()=> router.push('/posts/new')} className="bg-indigo-600 py-4 px-2 rounded">Add Post</button>
            </div>
            <div className="mt-4">
                {!posts
                    ?
                    <div className="py-3">
                        "Loading..."
                    </div>
                    :
                    <div>
                        {posts.map((item,i)=>(
                            <div key={i} className="my-4">
                                <Card title={item.title} body={item.body} id={item.id} />
                             </div>   
                        ))}
                    </div>

                }
            </div>
        </div>
    )
}
