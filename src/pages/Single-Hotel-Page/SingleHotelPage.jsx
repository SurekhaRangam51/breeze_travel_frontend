import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FinalPrice, HotelCardDetails, HotelImages, Navbar } from "../../components"
import "./SingleHotelPage.css"
export const SingleHotelPage = () => {
    const { id } = useParams()
    const [singleHotel, setSingleHotel] = useState({})
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`http://localhost:3700/api/hotelsdata/${id}`)
                setSingleHotel(data)
            }
            catch (err) {
                console.log(err)
            }
        })()
    }, [id])





    return (
        <Fragment>

            <Navbar />

            <main className="single-hotel-page">
                {singleHotel ? (
                    <>

                        <h3 className="hotel-name-add">{singleHotel.name}, {singleHotel.address}</h3>

                        <HotelImages singleHotel={singleHotel} />

                    </>
                ) : (
                    <p>Loading hotel details...</p>
                )}
                <div className="d-flex">
                    <HotelCardDetails singleHotel={singleHotel}/>
                    <FinalPrice singleHotel={singleHotel} />
                </div>

            </main>

        </Fragment>
    )
}