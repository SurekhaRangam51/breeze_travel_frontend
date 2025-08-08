import {v4 as uuid} from "uuid"
import { useFilter } from "../../../context"
export const PropertyType=()=>{
    const propertyObj=[{id:uuid(),type:"House"},{id:uuid(),type:"Guest House"},{id:uuid(),type:"Flat"},{id:uuid(),type:"Hotel"}]
    const {filterDispatch,propertytype}=useFilter()
    const handlePropertyTypeChange=(property)=>{
            filterDispatch({
                type:"PROPERTY_TYPE",
                payload:property
            })
    }
    return(
        <div className="fiter-container">
            <span  className="filter-label"> Property Type</span>
            <div className="d-flex align-center gap">
                {propertyObj.map(({id,type})=><span className={`span-label property-type cursor-pointer align-center justify-center on-hover ${type===propertytype ? "selected" :""}`}  
                onClick={()=>handlePropertyTypeChange(type)} key={id}>{type}</span>)}
            </div>

        </div>
    )
}