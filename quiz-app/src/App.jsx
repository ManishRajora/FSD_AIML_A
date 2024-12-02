import {Routes,Route} from 'react-router-dom'
import Counter from './components/Counter'
const App=()=>{
  return(
    <div>
      <Routes>
        <Route path="/counter" element={<Counter/>}></Route>
        <Route path="/" element={<h1>Home Page</h1>}></Route>
        <Route path="/login" element={<h1>Login Page</h1>}></Route>
        <Route path="/logout" element={<h1>Logout Page</h1>}></Route>
        <Route path="*" element={<h1>No Page Available</h1>}></Route>
      </Routes>
    </div>
  )
}
export {App}