import { useFilter } from "../../../context"
export const RoomAndBeds=()=>{
    const numberOfAmenties=["Any","1","2","3","4","5+"]
    const{filterDispatch,noOfBedrooms,noOfBeds,noOfBathrooms}=useFilter()
    const handleBedroomsChange=(number)=>{
            filterDispatch({
                type:"BEDROOMS",
                payload:number
            })
    }
    const handleBedsChange=(number)=>{
            filterDispatch({
                type:"BEDS",
                payload:number
            })
    }
    const handleBathroomsChange=(number)=>{
            filterDispatch({
                type:"BATHROOMS",
                payload:number
            })
    }
    console.log(noOfBedrooms)
    return(
        <div className="filter-container">
            <span  className="filter-label">Rooms And Beds</span>
            <div className="d-flex align-center gap-large">
                 <div className="d-flex direction-column gap">
                    <span className="span-label">Bedrooms</span>
                    <span className="span-label">Beds</span>
                    <span className="span-label">Bathrooms</span>
                </div>
             
            <div className="d-flex direction-column gap">
                <div>
                    {numberOfAmenties.map((number)=><span className={`span-label aminity-count align-center justify-center cursor-pointer on-hover ${noOfBedrooms.toString()===number ? "selected" :""}`} 
                    onClick={()=>handleBedroomsChange(number)} key ={number}>{number}</span>)}
                </div>
                  <div>
                    {numberOfAmenties.map((number)=><span className={`span-label aminity-count align-center justify-center cursor-pointer on-hover ${noOfBeds.toString()===number ? "selected" :""}` }
                    onClick={()=>handleBedsChange(number)} key ={number}>{number}</span>)}
                </div>
                  <div>
                    {numberOfAmenties.map((number)=><span className={`span-label aminity-count align-center justify-center cursor-pointer on-hover ${noOfBathrooms.toString()===number ? "selected" :""}`} 
                     onClick={()=>handleBathroomsChange(number)}key ={number}>{number}</span>)}
                </div>
            </div>
               
            </div>
             
             
           

        </div>
    )
}