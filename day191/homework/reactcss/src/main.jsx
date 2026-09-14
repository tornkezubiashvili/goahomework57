import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hw01 from './hw01.jsx'
import Hw02 from './hw02.jsx'
import Hw03 from './hw03.jsx'
import Hw04 from './hw04.jsx'
import Hw05 from './hw05.jsx'
import Hw06 from './hw06.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hw01 />
    <Hw02 />
    <Hw03 />
    <Hw04 />
    <Hw05 />
    <Hw06 />
  </StrictMode>,
)

