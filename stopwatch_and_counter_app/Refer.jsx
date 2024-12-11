import React from 'react'
import {useRef} from 'react'
const RefEx = () => {
    console.log("Object Rendered")
    let a=5;
    const refcount=useRef(0);
    function handleIncrement(){
        refcount.current++;
        console.log("refcount="+refcount.current)
        if(refcount.current==5)
            alert("refcount="+refcount.current)
    }
  return (
    <div>
      <h1>useRef Example</h1>
      <h2>refCount={refcount.current}</h2>
      <button onClick={handleIncrement}>Incerement</button>
      
    </div>
  )
}

export default RefEx