export const getHotelsByFreeCancel=(hotels,isCancelable)=>{
    const filterData=hotels.filter((hotel)=>hotel.isCancelable===isCancelable)
    return filterData
}