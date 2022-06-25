import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import './Month.css'

function Month () {
    return (
        <div className = 'month-area'>
            <FaAngleLeft size={25} style={{ fill: '#F5793B', cursor: "pointer" }}/>
            <span>June</span>
            <FaAngleRight size={25} style={{ fill: '#F5793B', cursor: "pointer" }}/>
        </div>
    )
}

export default Month