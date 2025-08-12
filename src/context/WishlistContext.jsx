import { createContext,useContext, useReducer } from "react";
import { WishlistReducer } from "../Reducers";
const initialState={
    wishlist:[]
}
const WishlistContext=createContext()

const WishlistProvider=({children})=>{
    const [{wishlist},wishlistDispatch]=useReducer(WishlistReducer,initialState)
    return(
        <WishlistContext.Provider value={{wishlist,wishlistDispatch}}>
            {children}
        </WishlistContext.Provider>
    )
 }

 const useWishlist=()=>useContext(WishlistContext)

 export {WishlistProvider,useWishlist}