import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { FallDetectionProvider } from './store/FallDetectionContext.jsx'
import { HelpDetectionProvider } from './store/HelpDetectedContext.jsx'
import { BrightnessProvider } from './context/brightness-context.jsx'
import { VolumeProvider } from './context/volume-context.jsx'
import { SleepScreenProvider } from './store/SleepScreenContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelpDetectionProvider>
      <FallDetectionProvider>
        <VolumeProvider>
          <BrightnessProvider>
            <SleepScreenProvider>
              <App />
            </SleepScreenProvider>
          </BrightnessProvider>
        </VolumeProvider>
      </FallDetectionProvider>
    </HelpDetectionProvider>
  </StrictMode>
)
