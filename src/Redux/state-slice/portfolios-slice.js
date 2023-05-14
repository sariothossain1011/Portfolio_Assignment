import {createSlice} from "@reduxjs/toolkit";
export const portfoliosSlice =createSlice({
    name:'portfolios',
    initialState:{
        PortfolioList:[],
        PortfolioView:{},
    },
    reducers:{
        SetPortfoliosList:(state,action)=>{
            state.PortfolioList=action.payload
        },
        SetPortfolioView:(state,action)=>{
            state.PortfolioView=action.payload
        },

    }
})

export  const {SetPortfoliosList ,SetPortfolioView}=portfoliosSlice.actions;
export default  portfoliosSlice.reducer;