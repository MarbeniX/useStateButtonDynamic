import { useState } from 'react'
import React from 'react'

export default function App() {
  let [count, setCount] = useState(0)
  function increment(){
    setCount(prevCount => prevCount + 1)
  }
  function decrement(){
    setCount(prevCount => prevCount - 1)
  }
  return (
    <div className='main-div'>
      <h1>How many times will Bob say "state in this section?</h1>
      <div className='counter'>
        <button className='minus' aria-label='Decrease count' onClick={decrement}>-</button>
        <h2 className='count'>{count}</h2>
        <button className='plus' aria-label='Increase count' onClick={increment}>+</button>
      </div>
    </div>
  )
}