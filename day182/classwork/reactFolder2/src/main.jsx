import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <p>hello world</p>
    <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1051045324229341%2F&show_text=false&width=380&t=0" width="380" height="476" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe>

  </StrictMode>,
)
