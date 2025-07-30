import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ComponentsWebProvider } from '../components-web/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ComponentsWebProvider>
      <App />
    </ComponentsWebProvider>
  </StrictMode>,
)
