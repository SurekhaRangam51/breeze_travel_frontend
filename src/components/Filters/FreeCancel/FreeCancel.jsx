import "./FreeCancel.css"
import { useFilter } from "../../../context"
export const FreeCancel=()=>{
    const {filterDispatch,isCancelable}=useFilter()
    const handleFreeCancel=(event)=>{
        filterDispatch({
            type:"FREE_CANCELABLE",
            payload:event.target.checked

        })
    }
   return(
        <div className="flex-container">
            <div className="d-flex align-center gap-larger">
            <span className="filter-label">Free cancelation</span>
            <label className="slide">
                <input type="checkbox" onChange={handleFreeCancel} value={isCancelable} checked={isCancelable}/>
                <span className="slider round"></span>
            </label>

</div>
        </div>
    )
}