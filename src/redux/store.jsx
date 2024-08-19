import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './noteSlice';
import { saveState, loadState } from '../localstorage';

const preloadedState = {
    note: loadState() || undefined 
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
