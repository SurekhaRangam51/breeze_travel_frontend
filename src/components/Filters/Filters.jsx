import { Fragment } from "react"
import "./Filters.css"
import { PriceRange} from "./PriceRange/PriceRange"
import { RoomAndBeds } from "./RoomAndBeds/RoomAndBeds"
import { PropertyType } from "./Property-Type/PropertyType"
import { FreeCancel } from "./FreeCancel/FreeCancel"
import { Ratings } from "."
import { useFilter } from "../../context"
export const Filters = () => {
    const {filterDispatch}=useFilter()
    const handleFilterClose=()=>{
        filterDispatch({
            type:"FILTER_CLOSE"
        })
    }
    const handleFilterClear=()=>{
        filterDispatch({
            type:"CLEAR"
        })
    }
    return (
        <div className="filter-modal">
            <div  className="filter-page shadow">
                <div className="d-flex align-center justify-space-between">
                    <span  className="filter-label">Filters</span>
                    <button className="button btn-filter-close cursor-pointer d-flex align-center justify-center" onClick={handleFilterClose}>
                        <span className="material-icons-outlined">
                            close
                        </span>
                    </button>
                </div>
                <PriceRange />
                <RoomAndBeds />
                <PropertyType />
                <Ratings />
                <FreeCancel />
                <div className="d-flex align-center justify-space-between">
                    
                    <button className=" button cursor btn-link-primary" onClick={handleFilterClear}>Clear All </button>
                    <button className=" button cursor btn-primary btn-apply " onClick={handleFilterClose}>Apply</button>
                </div>
            </div>
        </div>
    )
}