import qBank from "./qBank"
import './App.css'
function App() {
  return (
    <>
    <div id="Quiz">
     <h1>my Quiz Application</h1>
       <br/>
       Question {qBank.id}.{qBank.question}<br/>
       <input type="radio" name="opt"/>{qBank.option1}<br/> 
       <input type="radio" name="opt"/>{qBank.option2}<br/> 
       <input type="radio" name="opt"/>{qBank.option3}<br/> 
       <input type="radio" name="opt"/>{qBank.option4}<br/>
       <input type="button" value="Previous"/>
       <input type="button" value="Next"/>
       </div>
    </>
  )
}

export default App