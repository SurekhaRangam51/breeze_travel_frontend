import "./FinalPrice.css"
import { DateSelector } from "../DateSelector/DateSelector";
import { useDate } from "../../context/DateContext";
import { useNavigate } from "react-router-dom";
export const FinalPrice=({singleHotel})=>{
  const {guest,dateDispatch,checkInDate,checkOutDate}=useDate()
     const { _id, price, rating } = singleHotel; 
     const navigate=useNavigate()
    
     const handleGuestChange=(e)=>{
      dateDispatch({
        type:"GUEST",
        payload:e.target.value

      })
     }
     const handleReserveClick=()=>{
      navigate(`/confirm-payment/hotel/${_id}`)
     }
      const numberOfNights=
        checkInDate && checkOutDate ?(checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24) : 0
    const totalPayableAmount=price*numberOfNights+200
    return(
        <div className="price-details-container d-flex direction-column gap shadow">
      <div className="price-rating d-flex align-center justify-space-between">
        <p>
          <span className="fs-bold fs-large">Rs. {price}</span> night
        </p>
        <span className="rating d-flex align-center">
          <span className="material-icons-outlined">star</span>
          <span>{rating}</span>
        </span>
      </div>

      <div className="d-flex direction-column">
        <div className="grid-container-two-col selected-dates">
          <div className="checkin loc-container">
            <label className="label">Check in</label>
            <DateSelector checkIntype="in" />
            
          </div>
          <div className="checkin loc-container">
            <label className="label">Check Out</label>
            
            <DateSelector checkIntype="out" />
          </div>
        </div>
        <div className="guests gutter-sm">
          <p>Guests</p>
          {guest<=0 ? <input  className="guest-count-input" type="number" placeholder="Add Guests" value={guest} onChange={handleGuestChange}/> :<span>{guest}</span>}
        
          
        </div>
      </div>
        <div>
       <button
          className="button btn-reserve btn-primary cursor"
          onClick={handleReserveClick}
        >
          Reserve
        </button>
        </div>
      <div className="price-distribution d-flex direction-column">
        <div className="final-price d-flex align-center justify-space-between">
          <span className="span">Rs. {price} x {numberOfNights} nights</span>
          <span className="span">Rs. {price * numberOfNights}</span>
        </div>
        <div className="final-price d-flex align-center justify-space-between">
          <span className="span">Service fee</span>
          <span className="span">Rs. 200</span>
        </div>
        <div className="final-price d-flex align-center justify-space-between">
          <span className="span">Total</span>
          <span className="span">Rs. { totalPayableAmount}</span>
        </div>
      </div>
      </div>
    )
}