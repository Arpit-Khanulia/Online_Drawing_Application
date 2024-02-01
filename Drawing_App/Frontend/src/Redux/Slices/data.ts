import { createSlice } from "@reduxjs/toolkit";

export const myslice = createSlice({

    initialState:'',
    name:'id',
    reducers:{
        myid:(state,action)=>state = action.payload
    }
})


export const {myid} = myslice.actions;
export default myslice.reducer;



