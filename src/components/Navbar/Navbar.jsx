import { Link } from "react-router-dom"
import "./Navbar.css"
import { useDate, useAuth } from "../../context"
import { useNavigate } from "react-router-dom"
export const Navbar = () => {
    const { dateDispatch, guest, destination, checkInDate, checkOutDate } = useDate()
    const { authDispatch,token } = useAuth()
    const navigate=useNavigate()
    const handleSearchClick = () => {
        dateDispatch({
            type: "OPEN_SEARCH_MODAL",

        })
    }
    const handleAuthClick = () => {
        authDispatch({
            type: "OPEN_AUTH_MODAL"
        })

    }
    const handleWishlist=()=>{
        if(token){
             navigate("/wishlist")
    }
    else{
        authDispatch({
            type:"OPEN_AUTH_MODAL"
        })
    }
        }
       
    return (
        <header className="heading d-flex  align-center">

            <h1 className="heading-1">
                <Link className="link" to="/">BreezeTrips</Link>
            </h1>
            <div className=" form-container d-flex align-center cursor-pointer shadow" onClick={handleSearchClick}>
                <span className="form-option">{destination || "Any Where"}</span>
                <span className="border-right-1px"></span>
                <span className="form-option">  {checkInDate && checkOutDate
                    ? `${checkInDate.toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                    })} - ${checkOutDate.toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                    })}`
                    : "Any Week"}</span>
                <span className="border-right-1px"></span>
                <span className="form-option">{guest > 0 ? `${guest} guests` : "Add Guests"}</span>
                <span className=" search material-icons-outlined">
                    search
                </span>
            </div>


            <nav className="d-flex align-center gap-large" >
                <div className="d-flex align-center gap-large " onClick={handleWishlist}>
                    <button className=" button btn-filter cursor d-flex align-center gap-small">
                        <span className="material-icons-outlined fav-selected">
                            favorite
                        </span>
                        <span>Wishlist</span>
                    </button>
                </div>
                <div className=" nav d-flex align-center cursor-pointer" onClick={handleAuthClick}>
                    <span className="material-icons-outlined profile-option menu">
                        menu
                    </span>
                    <span className="material-icons-outlined profile-option person">
                        person_2
                    </span>
                </div>


            </nav>
        </header>
    )
}