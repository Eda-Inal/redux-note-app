import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name : 'note',
    initialState : {
        value:0
    },
    reducers : {

    }
})

// export const {}  = noteSlice.actions 
export default noteSlice.reducer