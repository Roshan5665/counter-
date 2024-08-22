import { createSlice } from "@reduxjs/toolkit";

//to  initialize the file as slice we use a method createslice()
export const counterslice =createSlice({
//name has no  importance
name:'counterApp',
//initial state creation
initialState:{
      value:0
},
reducers:{
    //logic to update value
    //actions are created inside the reducer
    increment:(state,data)=>{
        if(!data.payload){

            state.value =state.value +1;
            
        }
        else{
            state.value =state.value + data.payload;
        }
    },
    decrement:(state,data)=>{

        state.value=state.value-data.payload //state.value =state.value-1
    },
    reset:(state)=>{
        state.value= 0;
    }
}
});
export const {increment,decrement,reset}=counterslice.actions;
export default counterslice.reducer; 