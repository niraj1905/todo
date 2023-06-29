import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name : "todo",
    initialState: [],
    reducers : {
        addItem : (state,action) =>{
            state.push(action.payload);
        },
        deleteItem : (state,action) =>{
            state.splice(action.payload,1);
        }
    },
})

export const {addItem,deleteItem} = todoSlice.actions; 
export default todoSlice.reducer;