import { useState } from 'react'

function InputArea(){
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [value, setValue] = useState('');
    const [date, setDate] = useState('');

    const handleAddEvent = () => {
        let newItem = {
            date: new Date(date),
            category: category,
            title: title,
            value: parseInt(value)
        }

        setCategory('');
        setTitle('');
        setValue('');
        setDate('');
        onAdd(newItem); //change to CRUD?
    }
    
    return (
        <div>
            <input 
                type='search' 
                value={title} 
                onChange={e => setTitle(e.target.value)} 
                className='inputText' 
                placeholder= "Type in an operation you'd like to add" />

            <input 
                type='text' 
                value={value} 
                onChange={e => setValue(e.target.value)} 
                className='inputNumber' 
                placeholder='Value'/>

            <input 
                type='date' 
                className='inputDate' 
                value={date} 
                onChange={e => setDate(e.target.value)} />

            <select value={category} defaultValue={category} onChange={e => setCategory(e.target.value)} >

                <option className='option' hidden value={''}>Category</option>
                <option className='option' value={'salary'}>Salary</option>
                <option className='option' value={'food'}>Food</option>
                <option className='option' value={'rent'}>Rent</option>
                <option className='option' value={'clothes'}>Clothes</option>
                <option className='option' value={'profit'}>Profits</option>
                <option className='option' value={'vehicle'}>Vehicles</option>
                <option className='option' value={'tax'}>Taxes</option>
                <option className='option' value={'investments'}>Investments</option>
                <option className='option' value={'services'}>Services</option>
                
            </select>

            <button onClick={handleAddEvent}>Add</button>
        </div>
    )
}

export default InputArea