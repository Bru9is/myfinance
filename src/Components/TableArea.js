import { TableItem } from '../tableItem';
import { useEffect, useState } from 'react';

function TableArea(){

    const [title, setTitleSearch] = useState('');
    const [category, setCategorySearch] = useState('');

    return (
        <div>
            <div classname = 'search-area'>

                <input 
                    type='search' 
                    value={title} 
                    onChange={e => setTitleSearch(e.target.value)} 
                    placeholder='What is the search term?' />

                <select 
                    value={category} 
                    defaultValue={category} 
                    onChange={e => setCategorySearch(e.target.value)} >

                    <option className='option' selected value={''}>All</option>
                    <option className='option' value={'salary'}>Salary</option>
                    <option className='option' selected value={'food'}>Food</option>
                    <option className='option' value={'rent'}>Rent</option>
                    <option className='option' selected value={'clothes'}>Clothes</option>
                    <option className='option' value={'profit'}>Profits</option>
                    <option className='option' selected value={'vehicle'}>Vehicles</option>
                    <option className='option' value={'tax'}>Taxes</option>
                    <option className='option' selected value={'investments'}>Investments</option>
                    <option className='option' value={'services'}>Services</option>
                </select>   
            </div>

            <table>
                <thead>
                    <tr>
                        <td>Date</td>
                        <td>Category</td>
                        <td>Title</td>
                        <td>Value</td>
                    </tr>
                </thead>
                
                <tbody>
                    {list &&
                    list.map((item, index) => (
                        <TableItem handleDeleteItem={deleteItem} key={index} item={item} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableArea