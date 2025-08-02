import { Fragment ,useEffect,useState} from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { HotelCard, Navbar ,Categories, SearchStayWithDate} from "../../components/index"
import "./Home.css"
import axios from "axios"
import { useCategory } from "../../context"
import { useDate } from "../../context/DateContext"

export const Home=()=>{
    const [testData,setTestData]=useState([])
    const [hotels,setHotels]=useState([])
    const [hasMore,setHasMore]=useState(true)
    const [currentIndex,setCurrentIndex]=useState(16)
    const {hotelcategory}=useCategory()
    const {isSearchModelOpen}=useDate()
    useEffect(()=>{
        (async()=>{
            try{
                const {data}=await axios.get(`http://localhost:3700/api/hotelsdata?category=${hotelcategory}`)
                console.log("hc",hotelcategory)
                console.log(data)
                setTestData(data)
                setHotels(data ? data.slice(0,16) : [])
            }
            catch(err){
                console.log(err)
            }
        })()
    },[hotelcategory])

     
    const fetchMore=()=>{
        if(hotels.length>=testData.length){
            setHasMore(false)
            return
        }
        setTimeout(()=>{
            if(hotels && hotels.length>0){
                setHotels(hotels.concat(testData.slice(currentIndex,currentIndex+16)))
            
            setCurrentIndex((prev)=>prev+16)
            }
            else{
                setHotels([])
            }

        },1000)

    }
   
    return(
        <Fragment>
            <Navbar />
            <Categories />
            { hotels && hotels.length>0 ?(<InfiniteScroll
            next={fetchMore}
            hasMore={hasMore}
            dataLength={hotels.length}
            loader={hotels.length>0 && <h3 className="alert-text">Loading...</h3>}
            endMessage={<p className="alert-text">You have seen it all</p>}>
                 <main className="main d-flex align-center wrap gap-larger">
                {hotels &&  hotels.map((hotel)=><HotelCard key={hotel._id} hotel={hotel}/>)}
                 
            </main>
           
           
            </InfiniteScroll>) : (<></>)}
            {isSearchModelOpen && <SearchStayWithDate />}
             </Fragment>
            
            
           
       
    )
}