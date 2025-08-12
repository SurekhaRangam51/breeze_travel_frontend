import { Fragment } from "react"
import { Home, SearchResult, SingleHotelPage, Wishlist } from "./pages"
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
       </Routes>
      </Fragment>
  )
}

export default App
