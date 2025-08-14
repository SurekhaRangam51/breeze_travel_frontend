import { isCancel } from "axios"
import { PriceRange } from "../components/Filters"

export const FilterReducer = (state, { type, payload }) => {
    switch (type) {
        case "FILTER_OPEN":
            return {
                ...state,
                isFilterOpen: !state.isFilterOpen
            }
        case "FILTER_CLOSE":
            return {
                ...state,
                isFilterOpen: !state.isFilterOpen
            }
        case "MINIMUM_PRICE":
            return {
                ...state,
                priceRange: [Math.min(payload.newValue[0], payload.priceRange[1] - payload.minDifference), payload.priceRange[1]]

            }
        case "MAXIMUM_PRICE":
            return {
                ...state,
                priceRange: [payload.priceRange[0], Math.max(payload.newValue[1], payload.priceRange[0] + payload.minDifference)]
            }
        case "BEDROOMS":
            return {
                ...state,
                noOfBedrooms: payload === "Any" ? payload : payload === "5+" ? 5 : Number(payload)
            }
        case "BEDS":
            return {
                ...state,
                noOfBeds: payload === "Any" ? payload : payload === "5+" ? 5 : Number(payload)
            }
        case "BATHROOMS":
            return {
                ...state,
                noOfBathrooms: payload === "Any" ? payload : payload === "5+" ? 5 : Number(payload)
            }
        case "PROPERTY_TYPE":
            return {
                ...state,
                propertytype: payload
            }
        case "RATING":
            return {
                ...state,
                starRatings: payload
            }
        case "FREE_CANCELABLE":
            return {
                ...state,
                isCancelable: payload
            }
        case "CLEAR":
            return {
                ...state,
                priceRange: [100, 25000],
                noOfBedrooms: "Any",
                noOfBeds: "Any",
                noOfBathrooms: "Any",
                propertytype: "Any",
                starRatings: 1,
                isCancelable: true

            }
        default:
            return state
    }

}