import { Fragment, useEffect, useState } from "react"
import axios from "axios"
import "./Categories.css"
import { useCategory ,useFilter} from "../../context"
export const Categories = () => {
    const [categories, setCategories] = useState([])
    const [numberOfCategoriesToShow, setnumberOfCategoriesToShow] = useState(0)
    const {hotelcategory,setHotelCategory}=useCategory()
    const {isFilterOpen,filterDispatch}=useFilter()
      const handleShowLeft=()=>{
        setnumberOfCategoriesToShow(prev=>prev-10)
    }
     const handleShowRight=()=>{
        setnumberOfCategoriesToShow(prev=>prev+10)
    }
    useEffect(() => {
        (async () => {
            try{
                  const { data } = await axios.get(`http://localhost:3700/api/getcategorydata`)
            const categoriesToShow = data && data.slice(numberOfCategoriesToShow,numberOfCategoriesToShow+ 10)
            setCategories(categoriesToShow)
            
            }
            catch(err){
                console.log(err)
            }
          
        })()
    }, [numberOfCategoriesToShow,hotelcategory])
    const handleCategoryClick=(category)=>{
    
        setHotelCategory(category)
       
    }
    const handleFilterClick=()=>{
        filterDispatch({
            type:"FILTER_OPEN"
        })
    }

    return (

        <section className="categories gap d-flex align-center cursor-pointer ">
            {numberOfCategoriesToShow>=10 &&  <button className="button btn-category btn-left" onClick={handleShowLeft}>  <span className="material-icons-outlined">
                chevron_left
            </span></button>}
           
           
            {
                categories && categories.map(({ _id, category }) => <span  className={`${category === hotelcategory ? "category-color" : ""} item`} key={_id} onClick={()=>handleCategoryClick(category)}>{category}</span>)
            }
           {numberOfCategoriesToShow<categories.length &&  <button  className="button btn-category btn-right" onClick={handleShowRight}> <span className="material-icons-outlined">
                chevron_right
            </span></button>}
           <div>
                 <button className=" button btn-filter cursor d-flex align-center gap-small" onClick={handleFilterClick}>
            <span className="material-icons-outlined">filter_alt</span>
            <span>Filter</span>
           </button>
           

    
          </div>
         

        </section>


    )
}