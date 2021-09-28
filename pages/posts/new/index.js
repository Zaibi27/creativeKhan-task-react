import { useState } from 'react'
import { createPost } from '../../../features/posts/postSlice';
import { useDispatch } from 'react-redux';
import router from 'next/router';
export default function Index() {
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [userId, setUserId] = useState();
    const dispatch = useDispatch() ; 
    const addNewPost = () =>{
        dispatch(createPost({title: title , body: body , iduserId: parseInt(userId)}))
        router.push("/") ;
    }
    return (
        <div className="h-screen bg-gray-800 text-white">
            <div className="py-8 container mx-auto">
                <div>
                    <h1 className="text-3xl">Create New Post</h1>
                    <div className="mt-4">
                        <p>Title:</p>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} className="bg-gray-700 rounded p-2" />
                    </div>
                    <div className="mt-4">
                        <p>Body:</p>
                        <input value={body} onChange={(e) => setBody(e.target.value)} className="bg-gray-700 rounded p-2" />
                    </div>
                    <div className="mt-4">
                        <p>Id:</p>
                        <input value={userId} onChange={(e) => setUserId(e.target.value)} className="bg-gray-700 rounded p-2" />
                    </div>

                </div>
                <button onClick={addNewPost} className="mt-8 bg-indigo-600 py-4 px-2 rounded">Create</button>
            </div>
        </div>
    )
}
