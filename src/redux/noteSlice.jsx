
import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name : 'note',
    initialState : {
        sideBarNoteColor : "#9899e6",
        allNotes:[{
          title:"First Note",  textarea:"this is the first note",color:"#70d6ff",date:"23.08.2024"
        },
        {
            title:"Second Note",  textarea:"this is the second note",color:"#9899e6",date:"23.08.2024"
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
        sideBarOpen : true,
        alert:{
            show:false,
            message:"sdsdf",
            background:"error.main",
        }
 
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
setNewNoteColor :(state,action)=> {
state.newNote.color = action.payload
},
setAllNotes : (state) => {
    const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}/${month}/${year}`;

    state.allNotes.push({
        title: state.newNote.title,
        textarea: state.newNote.text,
        color: state.newNote.color,
        date :currentDate
    });
    state.newNote = { title: "", text: "", color: "" };
    },
    setAlert:(state,action) => {
        const {show,message,background}= action.payload
        state.alert.show = show
        state.alert.message= message
        state.alert.background = background
    },
    setAlertClose :(state) => {
        state.alert.show =  false
    }
    
    }
})

export const {setSideBarNoteColor,setIsDarkTheme,setSideBarOpen,setAddNewNote,setAddTitle,setAllNotes,setNewNoteColor,setAlert,setAlertClose}  = noteSlice.actions 
export default noteSlice.reducer