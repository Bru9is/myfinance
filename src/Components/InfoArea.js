import ReactDOM from 'react-dom'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";


function InfoArea(){

    return (
        <div>
            <FaAngleLeft 
                size={25} weight="bold" 
                icon="fa-solid fa-caret-left" 
                />
                
                <span>Current Month</span>

                <FaAngleRight 
                size={25} weight="bold" 
                icon="fa-solid fa-caret-right" 
                />
        </div>
    )
}

export default InfoArea