import { Fragment } from "react"
import { Home, SearchResult, SingleHotelPage } from "./pages"
import "./App.css"
import { Routes,Route } from "react-router-dom"
function App() {
  

  return (
      <Fragment>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels/:name/:address/:id/reserve" element={<SingleHotelPage />} />
        <Route path="/hotels/:address" element={<SearchResult />} />
       </Routes>
      </Fragment>
  )
}

export default App
