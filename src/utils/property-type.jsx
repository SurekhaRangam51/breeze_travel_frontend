export const getHotelsByPropertyType=(hotels,propertytype)=>{
    if(propertytype=="Any") return hotels
    const filterData=hotels.filter(({propertyType})=>propertyType===propertytype)
    return filterData

}