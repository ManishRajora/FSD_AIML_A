import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <App />
    <Footer/>
  </StrictMode>,
)