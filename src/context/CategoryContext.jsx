import { createContext,useContext,useState } from "react";
const initialState=" "

const CategoryContext=createContext()


const CategoryProvider=({children})=>{
    const [hotelcategory,setHotelCategory]=useState(initialState)
    return(
        <CategoryContext.Provider value={{hotelcategory,setHotelCategory}}>
            {children}
        </CategoryContext.Provider>
    )
}

const useCategory=()=>useContext(CategoryContext)

export {CategoryProvider,useCategory}