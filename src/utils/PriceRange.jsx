export const getHotelsByPrice=(hotels,priceRange)=>{
        const filterHotels=hotels.filter((hotel)=>hotel.price<=priceRange[1] && hotel.price>=priceRange[0])
        return filterHotels
}