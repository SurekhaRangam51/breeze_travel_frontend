import { Fragment } from "react"
import { Home, OrderSummary, Payment, SearchResult, SingleHotelPage, Wishlist } from "./pages"
import "./App.css"
import { Routes,Route } from "react-router-dom"
import { Filters } from "./components"
function App() {
  

  return (
      <Fragment>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels/:name/:address/:id/reserve" element={<SingleHotelPage />} />
        <Route path="/hotels/:address" element={<SearchResult />} />
        <Route path="/filters" element={<Filters />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/confirm-payment/hotel/:id" element={<Payment />} />
        <Route path="/order-summary" element={<OrderSummary />} />
       </Routes>
      </Fragment>
  )
}

export default App
