import ReactDOM from 'react-dom'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";


function InfoArea(){

    const handlePrevMonth = () => {
        
    };

    const handleNextMonth = () => {

    };

    return (
        <div>
            <FaAngleLeft 
                size={25} weight="bold" 
                icon="fa-solid fa-caret-left" 
                onClick={handlePrevMonth}/>
                
                <span>Current Month</span>

                <FaAngleRight 
                size={25} weight="bold" 
                icon="fa-solid fa-caret-right" 
                onClick={handleNextMonth}/>

            <div>
                <ResumeItem title='Incomes' color={'#008000'} value={income} />
                <ResumeItem title='Expenses' color={'#ff0000'} value={expense}  />
                <ResumeItem title='Balance' color={(income - expense) < 0 ? '#ff0000' : '#008000'} value={income - expense}  />
            </div>
        </div>
    )
}

export default InfoArea