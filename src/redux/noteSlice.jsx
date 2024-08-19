import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name : 'note',
    initialState : {
        sideBarNoteColor : "#9899e6",
        colors : ["#70d6ff","#ff70a6","#ff9770","#e9ff70","#8ac926","#9899e6","#80ffdb"],
        isDarkTheme : true
    },
    reducers : {
setSideBarNoteColor:(state,action) => {
    state.sideBarNoteColor = action.payload
},
setIsDarkTheme : (state) => {
    state.isDarkTheme = !state.isDarkTheme
}
    }
})

export const {setSideBarNoteColor,setIsDarkTheme}  = noteSlice.actions 
export default noteSlice.reducer