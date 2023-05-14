import {createSlice} from "@reduxjs/toolkit";
export const blogsSlice =createSlice({
    name:'blogs',
    initialState:{
        BlogsList:[],
        BlogView:[],
    },
    reducers:{
        SetBlogsList:(state,action)=>{
            state.BlogsList=action.payload
        },
        SetBlogView:(state,action)=>{
            state.BlogView=action.payload
        },

    }
})

export  const {SetBlogsList ,SetBlogView}=blogsSlice.actions;
export default  blogsSlice.reducer;