import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Applocation from './components/applocation'
//import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Applocation/>
  </StrictMode>,
)
