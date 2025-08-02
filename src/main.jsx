import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CategoryProvider } from './context/index.js'
import { DateProvider } from './context/DateContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CategoryProvider>
      <DateProvider>
           <App />
      </DateProvider>
       
    </CategoryProvider>
    
    </BrowserRouter>
  
  </StrictMode>,
)
