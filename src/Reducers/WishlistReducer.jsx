export const WishlistReducer=(state,{type,payload})=>{
    switch(type){
        case "Add_To_Wishlist":
            return{
                ...state,
                wishlist:[...state.wishlist,payload]
            }
        case "Remove_From_Wishlist":
            return{
                ...state,
                wishlist:state.wishlist.filter((hotel)=>hotel._id!==payload)
            }
        default:
            return state
    }
}