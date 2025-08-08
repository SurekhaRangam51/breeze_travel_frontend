import { useFilter } from "../../../context"
export const Ratings=()=>{
    const {filterDispatch,starRatings}=useFilter()
    const ratings=[1,2,3,4,5]
    const handleRatingChange=(rating)=>{
        filterDispatch({
            type:"RATING",
            payload:rating
        })
    }
    return (
        <div className="filter-container">
            <span className="filter-label">Ratings</span>
            <div className="d-flex gap">
                    {ratings.map(rating=><span className={`span-label aminity-count star align-center justify-center cursor-pointer on-hover ${rating===starRatings ? "selected" : " "}`}
                    onClick={()=>handleRatingChange(rating)} key={rating}>{rating}&up</span>)}
            </div>
        </div>
    )
}