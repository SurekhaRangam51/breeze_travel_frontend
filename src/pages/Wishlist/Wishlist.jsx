import "./Wishlist.css"
import { useWishlist } from "../../context"
import { HotelCard, Navbar } from "../../components"
import { Fragment } from "react"
export const Wishlist=()=>{
    const {wishlist}=useWishlist()
        return(
            <Fragment>
                <Navbar />
                  <h2 className="heading-2 d-flex justify-center">Your Wishlist</h2>
                
                   
                 {wishlist.length>0 && 
                 <section className="wishlist-page d-flex align-center wrap gap-larger">{wishlist && wishlist.map((hotel)=><HotelCard key={hotel._id} hotel={hotel}/>)}
                  </section>}
          
            </Fragment>
           
           
        )
}