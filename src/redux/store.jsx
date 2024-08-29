import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './noteSlice';
import { saveState, loadState } from '../localstorage';

const preloadedState = {
    note: loadState() || {
        sideBarNoteColor: "#9899e6",
        allNotes: [],
        newNote: { title: "", text: "", color: "" },
        colors: [
            { id: 1, color: "#ff5d8f", select: false },
            { id: 2, color: "#e4c1f9", select: false },
            { id: 3, color: "#f694c1", select: false },
            { id: 4, color: "#ffe45e", select: false },
            { id: 5, color: "#7bf1a8", select: false },
            { id: 6, color: "#A9DEF9", select: false },
            { id: 7, color: "#9899e6", select: false }
        ],
        isDarkTheme: false,
        sideBarOpen: false,
        alert: {
            show: false,
            message: "",
            background: "error.main",
            positive: false
        },
        filterSearch: "",
        filterNotes: [],
        filterBy: "title",
        editNote: { title: "first note", text: "first note", color: "#70d6ff", id: 1 },
        isEdit: false,
        filteredColor: "",
        filterColorAlert: false,
    }
};


export const store = configureStore({
    reducer: {
        note: noteReducer
    },
    preloadedState, 
});

store.subscribe(() => {
    saveState(store.getState().note); 
});
