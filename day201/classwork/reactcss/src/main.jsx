import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Npp from './Npp'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Npp />
  </StrictMode>,
)

