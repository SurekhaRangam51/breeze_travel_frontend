export const findHotelInWishlist=(wishlist,id)=>{
    const isHotelFound=wishlist.some((hotel)=>hotel._id===id)
    return isHotelFound
}