import {  createContext,useContext ,useReducer} from "react";
import { DateReducer } from "../Reducers";
const initialState={
    checkInDate:null,
    checkOutDate:null,
    isSearchModelOpen:false,
    destination:"",
    isSearchResultOpen:true,
    guest:0
}
const DateContext=createContext()
const DateProvider=({children})=>{
    const [{checkInDate, checkOutDate,isSearchModelOpen,destination,isSearchResultOpen,guest},dateDispatch]=useReducer(DateReducer,initialState)
    return(
         <DateContext.Provider value={{checkInDate, checkOutDate,isSearchModelOpen,destination,isSearchResultOpen,guest,dateDispatch}}>
        {children}
    </DateContext.Provider>
    )
   
}

const useDate=()=>useContext(DateContext)

export {DateProvider,useDate} 