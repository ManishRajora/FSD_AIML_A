import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<h1>Signup page</h1>}></Route>
        <Route path="/login" element={<h1>Login page</h1>}></Route>
        <Route path="/viewproduct" element={<h1>View products</h1>}></Route>
        <Route path="/addproduct" element={<h1>Add product</h1>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;