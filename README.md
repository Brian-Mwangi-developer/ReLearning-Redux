#initially when using createStore from redux
using Vite 
this is the initial step before the main branch
 store.jsx
import { createStore } from 'redux';
const reducerFn = (state = { counter: 0 }, action) => {
//synchronous functions
//we should not mutate the original state
if (action.type === "INC") {
return { counter: state.counter + 1 }
}
if (action.type === "DEC") {
return { counter: state.counter - 1 }
}
if (action.type === "ADD") {
return {
counter: state.counter + action.payload
}
}
return state;
};
const store = createStore(reducerFn);

export default store;

its corresponding App.jsx below

import { useState } from 'react'
import {useSelector,useDispatch } from 'react-redux'
import { actions } from './store/store'
import './App.css'
// Selectors are functions used to extract specific pieces of data from the Redux store.
//  They help in accessing the state in a structured and efficient manner.
function App() {
  const counter = useSelector((state)=>state.counter)
  const dispatch =useDispatch();//Dispatch is a function provided by Redux that you use to send actions to the store
  const Increment =()=>{
    dispatch({type:"INC"})
  }
  const Decrement =()=>{
    dispatch({type:"DEC"})
  }
  const Addby=()=>{
    dispatch({type:"ADD",payload:10})
  }
  return (
    <div>
      <h1>Counter App</h1>
       <h2>{counter}</h2>
       <button onClick={Increment}>Increment</button>
       <button onClick={Decrement}>Decrement</button>
       <button onClick={Addby}>Add by 10</button>
    </div>
  )
}

export default App

below is the main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)

 