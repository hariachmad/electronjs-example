import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { FallDetectionProvider } from './store/FallDetectionContext.jsx'
import { HelpDetectionProvider } from './store/HelpDetectedContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelpDetectionProvider>
      <FallDetectionProvider>
        <App />
      </FallDetectionProvider>
    </HelpDetectionProvider>
  </StrictMode>
)
