import "./AuthDropDown.css"
import { useNavigate } from "react-router-dom"
import { useAuth,useFilter,useDate,useWishlist } from "../../context"
export const AuthDropDown=()=>{
    const navigate=useNavigate()
    const {authDispatch}=useAuth()
    const {filterDispatch}=useFilter()
    const {dateDispatch}=useDate()
    const {wishlistDispatch}=useWishlist()

    const handleWishlistClick=()=>{
            authDispatch({
                type:"AUTH_DROP_DOWN"
            })
           
            navigate("/wishlist")
    }
    const handleLogoutClick=()=>{
        
             authDispatch({
                type:"CLEAR"
            })
            authDispatch({
                type:"CLEAR_CREDENTIALS"
            })
            filterDispatch({
                type: "CLEAR"
            })
            dateDispatch({
                type:"CLEAR_INPUTS"
            })
            wishlistDispatch({
                type:"CLEAR_WISHLIST"
            })
             authDispatch({
                type:"AUTH_DROP_DOWN"
            })
            navigate("/")
    }
     return (
        <div className="drop-down-container shadow d-flex direction-column absolute">
            <span className="option-span wishlist-span cursor-pointer d-flex align-center gap-small" onClick={handleWishlistClick}><span class="material-icons-outlined">
                favorite_border
            </span>
                Wishlist
            </span>
            <span className="option-span logout cursor-pointer d-flex align-center gap-small" onClick={handleLogoutClick}>
                <span class="material-icons-outlined">
                    logout
                </span>
                Logout</span>
        </div>
    )
}