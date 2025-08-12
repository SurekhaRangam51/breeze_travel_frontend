import "./HotelCard.css"
import { useNavigate } from "react-router-dom"
import { useWishlist,useAuth } from "../../context"
import { findHotelInWishlist } from "../../utils"
export const HotelCard = ({hotel}) => {
    const {_id,price,rating,name,state,address,image}=hotel
    const navigate=useNavigate()
    const {wishlistDispatch,wishlist}=useWishlist()
    const {token,authDispatch}=useAuth()
    
    const handleHotelCardClick=()=>{
        navigate(`/hotels/${name}/${address}/${_id}/reserve`)
    }
    const isHotelInWishlist=findHotelInWishlist(wishlist,_id)
    const handleFavouriteClick=()=>{
        if(token){
             if(!isHotelInWishlist){
             wishlistDispatch({
            type:"Add_To_Wishlist",
            payload:hotel
        })
       
        }
        else{
            wishlistDispatch({
                type:"Remove_From_Wishlist",
                payload:_id
            })
        }
        
    }
    else{
        authDispatch({
            type:"OPEN_AUTH_MODAL"
        })
    }
        }
       
    
    return (

        <div className="relative hotelcard-container shadow cursor-pointer">
            <div onClick={handleHotelCardClick}>
                <img className="img" src={image} alt={name} />
            
            <div className="hotelcard-details">
                <div className="d-flex align-center">
                    <span className="location">{address},{state}</span>
                    <span className="rating d-flex align-center">
                        <span className="material-icons-outlined">
                            star
                        </span>

                        <span>{rating}</span>
                    </span>

                </div>
                 <p className="hotel-name">{name}</p>
            <p className="price-details">
                <span className="price">Rs. {price}</span>
                <span>night</span>
            </p>
            </div>
            </div>
           

            
                <button className={`button btn-wishlist absolute d-flex align-center cursor-pointer ${isHotelInWishlist ? "fav-selected" : ""}`} onClick={handleFavouriteClick}>
                    <span className="material-icons-outlined">
favorite
</span>
                </button>
            

        </div>

    )
}