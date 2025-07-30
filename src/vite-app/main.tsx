import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '../actual-app'
import { ComponentsWebProvider } from '../components-web/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ComponentsWebProvider>
      <App />
    </ComponentsWebProvider>
  </StrictMode>,
)
