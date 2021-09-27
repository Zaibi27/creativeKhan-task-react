import {createSlice , createAsyncThunk } from '@reduxjs/toolkit' ;
import axios from "axios" ; 

export const fetchPosts = createAsyncThunk("posts/fetchAllPosts", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
   .then(res => {
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
    }
})
export const { createPost , setPosts } = postSlice.actions ; 
export const selectPostsList = state => state.posts.posts ;
export default postSlice.reducer ;

export const selectPostById = (state, postId) =>  state.posts.posts.find(items => items.id === 1)
