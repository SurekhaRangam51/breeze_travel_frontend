import { createContext,useContext,useState } from "react";
const HotelContext=createContext()

const initialState={
    hotel:{}
}
const HotelProvider=({children})=>{
    const [hotel,setHotel]=useState(initialState)
    return(
        <HotelContext.Provider value={{hotel,setHotel}}>
            {children}
        </HotelContext.Provider>
    )
}

const useHotel=()=>useContext(HotelContext)
export {HotelProvider,useHotel}