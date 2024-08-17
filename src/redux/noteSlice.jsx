import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name : 'note',
    initialState : {
        value:0,
        colors : ["#ffadad","#ffd6a5","#fdffb6","#caffbf","#9bf6ff","#bdb2ff"]
    },
    reducers : {

    }
})

// export const {}  = noteSlice.actions 
export default noteSlice.reducer