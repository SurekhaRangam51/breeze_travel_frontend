import { Fragment } from "react"
import "./HotelImages.css"
export const HotelImages=({singleHotel})=>{
    const {image,imageArr}=singleHotel
    return(
        <Fragment>
            <div className="hotel-image-container d-flex gap-small">
                <div className="primary-image-container gap-small">
                    <img className="primary-img" src={image} name="primary-img" />
                </div>
                <div className="d-flex wrap gap-min">
                    {imageArr?.map(image=><img key={image} className="hotel-img" src={image} alt="hotel-img" />)}
                </div>

            </div>
        </Fragment>
    )
}