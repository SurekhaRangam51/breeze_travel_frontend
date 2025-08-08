export const getHotelsByRating=(hotels,starRatings)=>{
    const filterData=hotels.filter(({rating})=>rating>=starRatings)
    return filterData
}