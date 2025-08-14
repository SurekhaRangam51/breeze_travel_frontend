import { Fragment } from "react"
import { OrderSummaryComponent } from "../../components"
import "./OrderSummary.css"
export const OrderSummary=()=>{
    return(
        <Fragment>
            <main className="order-summary-main">
                 <OrderSummaryComponent />
            </main>
           
        </Fragment>
    )
}