import React from 'react'

export default function Index({post}) {
    return (
        <div className="container mx-auto py-8">
            <div className=" cursor-pointer lg:w-6/12 bg-gray-700 py-4 px-2 border border-gray-300 rounded-md">
                <h1 className="text-gray-100 text-xl font-semi-bold">{post.title}</h1>
                <p className="text-gray-100 text-sm mt-2">{post.body}</p>
            </div>

        </div>
    )
}
