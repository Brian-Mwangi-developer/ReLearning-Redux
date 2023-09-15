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
    dispatch(actions.increment())
  }
  const Decrement =()=>{
    dispatch(actions.decrement())
  }
  const Addby=()=>{
    dispatch(actions.addby(10))
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
