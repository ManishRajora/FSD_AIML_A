import React from 'react'
import {useState,useEffect} from 'react'
const Stopwatch = () => {
  const [isrunning,setIsrunning]=useState(false)
  const [time,setTime]=useState(0);
  const [isvalid,setIsvalid]=useState(null)
  function handleRestart(){
      setTime(0);
      setIsrunning(false);
  }
  function handleStart(){
    setIsrunning((pre)=>!pre)
    clearInterval(isvalid);
  }
  useEffect(()=>{
     if(isrunning){
      const id=setInterval(()=>{
         setTime((time)=>(time+1))
      },1000)
      setIsvalid(id);
     }
     return ()=>clearInterval(isvalid)
  },[isrunning])
  function timeformat(time){
          const hours=Math.floor((time/3600))
          const hr=(hours<10)?('0'+hours):hours
          const minutes=Math.floor((time/3600)/60);
          const m=(minutes<10)?('0'+minutes):minutes;
          const seconds=time%60;
          const s=(seconds<10)?('0'+seconds):seconds;
          return `${hr}:${m}:${s}`
  }
  return (
    <div>
      <h1>
        Stop Watch App
      </h1>
      <h1>{timeformat(time)}</h1>
      <button onClick={handleStart}>{isrunning?'Stop':'Start'}</button>
      <button onClick={handleRestart}>Reset</button>
    </div>
  )
}

export default Stopwatch