import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import JsonTest from "./components/JsonTest.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <JsonTest/>
  </StrictMode>,
)
