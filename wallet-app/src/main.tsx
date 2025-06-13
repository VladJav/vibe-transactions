import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Configure FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAppleAlt, faStore, faCoffee, faShoppingCart, faCar, faCreditCard, faMoneyBillWave, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faAppleAlt, faStore, faCoffee, faShoppingCart, faCar, faCreditCard, faMoneyBillWave, faArrowLeft)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
