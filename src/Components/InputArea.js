import { useState, useEffect } from 'react';
import axios from 'axios';
import './InputArea.css'


export default function InputArea(props) {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState(null);
  const [category, setCategory] = useState("");

  const data = {
    title,
    value,
    date,
    category,
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
        .post('http://ironrest.herokuapp.com/myFinance', data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
  }

  return (
    <div>
      <form className="new-input" onSubmit={handleSubmit}>
        <div className = 'input-wrapper'>
        <input
          value={title}
          name={title}
          placeholder="Type an item you would like to add"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className = 'short-input'
          value={value}
          name={value}
          placeholder="Value"
          onChange={(e) => setValue(e.target.value)}
        />

        <input
          className='short-input'
          type="date"
          value={date}
          name={date}
          placeholder="Date"
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          value={category}
          name={category}
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <button className = 'add-button' type="submit">Add Item</button>
        </div>
      </form>
    </div>
  )
}
