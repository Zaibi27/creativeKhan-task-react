import {createSlice , createAsyncThunk } from '@reduxjs/toolkit' ;
import axios from "axios" ; 

export const fetchPosts = createAsyncThunk("posts/fetchAllPosts", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
   .then(res => {
       return res.data
   })
   return response ; 
})
export const createPost = createAsyncThunk("posts/createNewPost", async (obj) => {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts" , obj)
   .then(res => {
       console.log("Post created" , res.data)
       return res.data
   })
   return response ; 
})



export const postSlice  = createSlice({
    name: "posts" , 
    initialState: {
        posts:[]
    },
    reducers:{}
    ,
    extraReducers(builder){
        builder.addCase(fetchPosts.fulfilled , (state,action)=>{
            state.posts = action.payload
        })
        .addCase(createPost.fulfilled , (state,action)=>{
            state.posts =  [...state.posts, action.payload]
        } )  
}})
export const { setPosts } = postSlice.actions ; 
export const selectPostsList = state => state.posts.posts ;
export default postSlice.reducer ;

export const selectPostById = (state, postId) =>  state.posts.posts.find(items => items.id === 1)
