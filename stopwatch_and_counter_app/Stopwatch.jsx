import React from 'react'
import {useState} from 'react'
const Stopwatch = () => {
    const [isRunning,setIsRunning]=useState(false)
    function handleStartStop(){
        setIsRunning((pre)=>!pre)
    }
  return (
    <div>
      <h1>StopWatch App</h1>
      <h1>Timer:</h1>
      <button onClick={handleStartStop}>{isRunning? 'Stop':'Start'}</button>
      <button>Reset</button>
    </div>
  )
}

export default Stopwatch