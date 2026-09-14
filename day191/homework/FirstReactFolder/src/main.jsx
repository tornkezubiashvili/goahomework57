import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hw01 from './hw01.jsx'
import Hw02 from './hw02.jsx'
import Hw03 from './hw03.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hw01/>
    <Hw02/>
    <Hw03/>
  </StrictMode>,
)
