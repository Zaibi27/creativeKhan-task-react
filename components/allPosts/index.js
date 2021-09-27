import { useEffect, useState } from 'react';
import { selectPosts } from "../../features/posts/postSlice"
import { useSelector, useDispatch } from "react-redux"
import Card from "./postCard"
export default function Index() {
    const postList = useSelector(selectPosts)
    const dispatch = useDispatch();
    const [posts, setPosts] = useState();

    useEffect(() => {
        if (postList) {
            setPosts(postList);
            console.log("Posts are here", postList);
        }
    }, [dispatch, postList])
    return (
        <div className="container mx-auto py-4">
            <h1 className="text-3xl font-semibold">All Posts</h1>
            <div className="mt-4">
                {!posts
                    ?
                    <div className="py-3">
                        "Loading..."
                    </div>
                    :
                    <div>
                        {posts.map((item,i)=>(
                            <div className="my-4">
                                <Card title={item.title} body={item.body} id={item.id} />
                             </div>   
                        ))}
                    </div>

                }
            </div>
        </div>
    )
}
