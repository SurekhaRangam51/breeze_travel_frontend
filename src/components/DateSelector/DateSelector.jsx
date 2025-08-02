import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import "./DateSelector.css"
import { useState } from 'react';
import { useDate } from '../../context/DateContext';
export const DateSelector = ({ checkIntype }) => {
    const { checkInDate,checkOutDate,dateDispatch}=useDate()
    const handleDateChange=(date)=>{
        dateDispatch({
            type:checkIntype=="in" ? "CHECK_IN":"CHECK_OUT",
            payload:date
        })
    }
    const handleDateFocus=()=>{
        dateDispatch({
            type:"DATE_FOCUS"
        })
    }
    return (
        <>
            <DatePicker
                className="search-dest input"
                dateFormat="dd/MM/yyyy"
                placeholderText='Add dates'
                classOnScroll={true}
                selected={checkIntype == "in"? checkInDate:checkOutDate}
                onChange={(date) => handleDateChange(date)}
                onFocus={handleDateFocus}
            />
        </>
    )
}