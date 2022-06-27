import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import './Year.css'
import { useState } from 'react'


function Year (props) {

    const years = ['2020','2021','2022','2023','2024','2025','2026','2027','2028','2029','2030']

    const handleLeft = () => {
        if (props.currentYear > 0) {
            let newYear = props.currentYear-1
            props.filterYear(newYear)
        }
    }

    const handleRight = () => {
        if (props.currentYear < 2030 ) {
            let newYear = props.currentYear+1
            props.filterYear(newYear)
        }
    }

    return (
        <div className = 'year-area'>
            <FaAngleLeft onClick = {handleLeft} size={25} style={{ fill: '#F5793B', cursor: "pointer" }}/>
            <span>{[props.currentYear]}</span>
            <FaAngleRight onClick = {handleRight} size={25} style={{ fill: '#F5793B', cursor: "pointer" }}/>
        </div>
    )
}

export default Year