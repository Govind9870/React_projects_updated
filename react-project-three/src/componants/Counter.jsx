import React, {useState} from 'react'
import './Counter.css'

const Counter = () => {
    const[count, setCount] = useState(0);
  return (
    <div className='counter_container'>
        <p id='para'>Your number is {count}</p>
        <button id='btn' onClick={()=> {setCount(count+1)}}>Tap me</button>
    </div>
  )
}

export default Counter
