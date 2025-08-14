import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CategoryProvider,FilterProvider,DateProvider,AuthProvider ,WishlistProvider,HotelProvider} from './context/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CategoryProvider>
      <DateProvider>
        <FilterProvider>
          <AuthProvider>
            <WishlistProvider>
              <HotelProvider>
                   <App />
              </HotelProvider>
            
                    
            </WishlistProvider>
                
          </AuthProvider>
              
        </FilterProvider>
          
      </DateProvider>
       
    </CategoryProvider>
    
    </BrowserRouter>
  
  </StrictMode>,
)
