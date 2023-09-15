import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({//create slice is a function rhich allows
    //defining reducers,actionscreators and intitalstate in a more concise and structured way
    name:'counter',
    initialState:{counter: 0},
    reducers:{
        increment(state,action){
            state.counter ++
        },
        decrement(state,action){
            state.counter --
        },
        addby(state,action){
            state.counter += action.payload;
        },
    }
})

export const actions =counterSlice.actions;
const store = configureStore({//telling the store the its available reducers are counterSlice reducer
    reducer:counterSlice.reducer
})

export default store;