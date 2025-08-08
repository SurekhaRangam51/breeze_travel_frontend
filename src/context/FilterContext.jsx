import { createContext,useContext,useReducer } from "react";
import { FilterReducer } from "../Reducers";
const initialState={
    isFilterOpen:false,
    priceRange:[100,25000],
    noOfBedrooms:"Any",
    noOfBeds:"Any",
    noOfBathrooms:"Any",
    propertytype:"Any",
    starRatings:1,
    isCancelable:true
    
}
const FilterContext=createContext()
const FilterProvider=({children})=>{
    const [{isFilterOpen,priceRange,noOfBathrooms,noOfBedrooms,noOfBeds,propertytype,starRatings,isCancelable},filterDispatch]=useReducer(FilterReducer,initialState)
    return(
        <FilterContext.Provider value={{isFilterOpen,priceRange,noOfBathrooms,noOfBedrooms,noOfBeds,propertytype,starRatings,isCancelable,filterDispatch}}>
            {children}
        </FilterContext.Provider>
    )
}
const useFilter=()=>useContext(FilterContext)
export {FilterProvider,useFilter}