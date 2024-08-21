
import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name : 'note',
    initialState : {
        sideBarNoteColor : "#9899e6",
    
        colors:[
            {
            id:1,color:"#70d6ff",select:false
        },   {
            id:2,color:"#ff70a6",select:false
        },
        {
            id:3,color:"#ff9770",select:false
        },
        {
            id:4,color:"#e9ff70",select:false
        },
        {
            id:5,color:"#8ac926",select:false
        },
        {
            id:6,color:"#9899e6",select:false
        },
        {
            id:7,color:"#80ffdb",select:false
        }
    
    ],
        isDarkTheme : true,
        sideBarOpen : false
 
    },
    reducers : {
setSideBarNoteColor:(state,action) => {
    state.sideBarNoteColor = action.payload
},
setIsDarkTheme : (state) => {
    state.isDarkTheme = !state.isDarkTheme
},
setSideBarOpen : (state,action) =>  {
state.sideBarOpen = action.payload
}

    }
})

export const {setSideBarNoteColor,setIsDarkTheme,setSideBarOpen}  = noteSlice.actions 
export default noteSlice.reducer