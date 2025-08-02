import { useState,useEffect, Fragment } from "react"
import axios from "axios"
import { useDate } from "../../context/DateContext"
import { HotelCard, Navbar } from "../../components"
import { useCategory } from "../../context"

export const SearchResult=()=>{
    const [hotels,setHotels]=useState([])
    const {destination}=useDate()
    const {hotelcategory}=useCategory()
    useEffect(()=>{
        (async()=>{
            try{
                const {data}=await axios.get(`http://localhost:3700/api/hotelsdata?category=${hotelcategory}`)
                setHotels(data)
            }
            catch(err){
                console.log(err)
            }
        })()
    },[destination])
    const filterData=hotels.filter(({address,city,state,country})=>(
        address.toLowerCase().includes(destination.toLowerCase()) ||
        city.toLowerCase().includes(destination.toLowerCase()) ||
        state.toLowerCase().includes(destination.toLowerCase()) ||
        country.toLowerCase().includes(destination.toLowerCase()) 
    ))
    return(
        <Fragment>
            <Navbar />
            <section className="main d-flex gap-larger align-center wrap">
                {filterData && filterData.map((hotel)=> <HotelCard key={hotel._id} hotel={hotel}/>)}
            </section>
            
           
        </Fragment>
    )
}