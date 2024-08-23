
import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name : 'note',
    initialState : {
        sideBarNoteColor : "#9899e6",
        allNotes:[{
          title:"First Note",  textarea:"this is the first note",color:"#70d6ff"
        },
        {
            title:"Second Note",  textarea:"this is the second note",color:"#9899e6"
          }],
        newNote:{
title:"",text:"",color:""
        },
    
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
        isDarkTheme : false,
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
},
 setAddNewNote : (state, action) => {
    const { key, value } = action.payload;
    state.newNote = {
        ...state.newNote,
        [key]: value,
    };
},
setAllNotes : () => {

}




    }
})

export const {setSideBarNoteColor,setIsDarkTheme,setSideBarOpen,setAddNewNote,setAddTitle}  = noteSlice.actions 
export default noteSlice.reducer