import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HumanaApp } from './HumanaApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HumanaApp />
  </StrictMode>,
)
