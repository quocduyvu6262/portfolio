import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import studio from "@theatre/studio";
// import extension from "@theatre/r3f/dist/extension";
//
// studio.extend(extension)
// studio.initialize()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
