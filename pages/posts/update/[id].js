import React, { useState , useEffect } from 'react'
import { useRouter } from "next/router";
import { selectPostById , updatePost} from "../../../features/posts/postSlice";
import { useSelector , useDispatch } from "react-redux";

export default function Index() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { id } = router.query;
    const selectedPost = useSelector(state => selectPostById(state, parseInt(id)));
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [userId, setUserId] = useState();
    
    useEffect(()=>{
        if(selectedPost){
            setTitle(selectedPost.title) 
            setBody(selectedPost.body) 
            setUserId(selectedPost.userId) 
        }
    },[selectedPost])


    const updateSelectedPost = () => {
        dispatch(updatePost({
            id: selectedPost.id,
            title: title,
            body: body,
            userId: userId
        }))
        router.push("/")
    }
    return (
        <div className="h-screen bg-gray-800 py-8 text-white">
            {
                selectedPost &&
                <div className="container mx-auto">
                    <h1 className="text-3xl font-semibold">Update the Post</h1>
                    <div className="my-3">
                        <p>Title:</p>
                        <input className="bg-gray-700 p-3 rounded" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="my-3">
                        <p>Body:</p>
                        <input className="bg-gray-700 p-3 rounded" value={body} onChange={(e) => setBody(e.target.value)} />
                    </div>
                    <div className="my-3">
                        <p>UserId:</p>
                        <input className="bg-gray-700 p-3 rounded" value={userId} onChange={(e) => setUserId(e.target.value)} />
                    </div>
                    <button onClick={updateSelectedPost} className="bg-indigo-600 py-2 px-4 rounded mt-4">Update</button>
                </div>
            }
        </div>
    )
}
