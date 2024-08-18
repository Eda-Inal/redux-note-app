import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name : 'note',
    initialState : {
        sideBarNoteColor : "#caffbf",
        colors : ["#ffadad","#ffd6a5","#fdffb6","#caffbf","#9bf6ff","#bdb2ff"]
    },
    reducers : {
setSideBarNoteColor:(state,action) => {
    state.sideBarNoteColor = action.payload
}
    }
})

export const {setSideBarNoteColor}  = noteSlice.actions 
export default noteSlice.reducer