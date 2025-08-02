import { DateSelector } from "../DateSelector/DateSelector"
import "./SearchStayWithDate.css"
import { useDate } from "../../context/DateContext"
import { useEffect ,useState} from "react"
import axios from "axios"
import { useCategory } from "../../context"
import { useNavigate } from "react-router-dom"

export const SearchStayWithDate = () => {
    const navigate=useNavigate()
    const {hotelcategory}=useCategory()
    const {dateDispatch,destination,isSearchResultOpen,guest}=useDate()
    const [hotels,setHotels]=useState([])
    const handleDestinationChange=(event)=>{
        dateDispatch({
            type:"DESTINATION",
            payload:event.target.value
        })

    }
     useEffect(()=>{
        (async()=>{
            try{
                const {data}=await axios.get(`http://localhost:3700/api/hotelsdata?category=${hotelcategory}`)
                
                setHotels(data )
            }
            catch(err){
                console.log(err)
            }
        })()
    },[hotelcategory])

    const filterData=hotels.filter(({address,city,state,country})=>(
        address.toLowerCase().includes(destination.toLowerCase()) ||
        city.toLowerCase().includes(destination.toLowerCase()) ||
        state.toLowerCase().includes(destination.toLowerCase()) ||
        country.toLowerCase().includes(destination.toLowerCase()) 
    ))
    
    const handleAddress=(address)=>{
        dateDispatch({
            type:"DESTINATION",
            payload:address
        })

    }
    const handleSearchResultOpen=()=>{
        dateDispatch({
            type:"HANDLE_SEARCH_RESULT_OPEN"
        })

    }
    const handleGuestChange=(event)=>{
        dateDispatch({
            type:"GUEST",
            payload:event.target.value
        })
    }
    const handleSerchButtonClick=()=>{
        dateDispatch({
      type: "CLOSE_SEARCH_MODAL"
    });
    navigate(`/hotels/${destination}`);
    }
    return (
        <div  className="destination-container">
            <div className="destionation-options d-flex align-center absolute">
                <div className="location-container">
                    <label className="label">where</label>
                    <input className="input search-dest" value={destination} placeholder="Search Destination" onChange={handleDestinationChange}
                    autoFocus onFocus={handleSearchResultOpen}/>
                </div>
                <div className="location-container">
                    <label className="label">Check In</label>
                    <DateSelector checkIntype="in" />
                </div>
                <div className="location-container">
                    <label className="label">Chech out</label>
                    <DateSelector checkInType="out" />
                </div>
                 <div className="location-container">
          <label className="label"> Add Guests</label>
          <input className="input search-dest" placeholder="Add Guests"onChange={handleGuestChange} value={guest}/>
          </div>
                <div className="search-container d-flex align-center cursor" onClick={handleSerchButtonClick}>
                    <span class="material-icons-outlined">
                        search
                    </span>
                    <span>Search</span>
                </div>
            </div>
            {isSearchResultOpen &&
             <div className="search-result-container absolute">

                 {filterData && filterData.map(({address,city})=>(
                    <p className="cursor-pointer" onClick={()=>handleAddress(address)}>{address} , {city}</p>
                ))}

             </div>
}

        </div>
    )
}