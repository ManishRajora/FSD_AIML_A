import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Counter from './Components/Counter'
import Stopwatch from './Components/Stopwatch'
const App=()=>{
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/counter" element={<counter/>}></Route>
        <Route path="/Stopwatch" element={<Stopwatch/>}></Route>
        <Route path="*" element={<h1>No Page Available</h1>}></Route>
      </Routes>

    </div>
  )
}
export default App