
import { createSlice } from "@reduxjs/toolkit";


export const noteSlice = createSlice({
    name : 'note',
    initialState : {
        sideBarNoteColor : "#9899e6",
        allNotes:[{
          title:"First Note",  textarea:"this is the first note",color:"#70d6ff",date:"23.08.2024",id:1
        },
        {
            title:"Second Note",  textarea:"this is the second note",color:"#9899e6",date:"23.08.2024",id:2
          }],
        newNote:{
title:"",text:"",color:""
        },
        archieveNote : [],
        archieveNotes:[]
    ,
        colors:[
            {
            id:1,color:"#ff5d8f",select:false
        },   {
            id:2,color:"#e4c1f9",select:false
        },
        {
            id:3,color:"#f694c1",select:false
        },
        {
            id:4,color:"#ffe45e",select:false
        },
        {
            id:5,color:"#7bf1a8",select:false
        },
        {
            id:6,color:"#A9DEF9",select:false
        },
        {
            id:7,color:"#9899e6",select:false
        }
    
    ],
        isDarkTheme : false,
        sideBarOpen : false,
        alert:{
            show:false,
            message:"sdsdf",
            background:"error.main",
        },
        filterSearch :"",
        filterNotes : [
       
        ],
 
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
        date :currentDate,
        id:state.allNotes.length + 1
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
    },
    setDeleteNotes : (state,action) => {
        const id = action.payload;
       
        const notDeleted = state.allNotes.filter((note) => {
            if(note.id !== id) return note
        })
        state.allNotes = notDeleted;

    },
    setFilterSearch: (state, action) => {
        const searchTerm = action.payload;
        state.filterSearch = searchTerm;
    
        if (searchTerm.length > 0) {
            state.filterNotes = state.allNotes.filter((note) => 
                note.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        } else {
            state.filterNotes = [];
        }
    }
    
    
    }
})

export const {setSideBarNoteColor,setIsDarkTheme,setSideBarOpen,setAddNewNote,setAddTitle,setAllNotes,setNewNoteColor,setAlert,setAlertClose,setDeleteNotes,setFilterSearch}  = noteSlice.actions 
export default noteSlice.reducer