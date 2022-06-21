import { useState, useEffect } from 'react';
import axios from 'axios';


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
      <h1 className="new-input">New Input</h1>
      <form className="new-input" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          value={title}
          name={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="value">Value</label>
        <input
          value={value}
          name={value}
          placeholder="Value"
          onChange={(e) => setValue(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          value={date}
          name={date}
          placeholder="Date"
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="category">Category</label>
        <input
          value={category}
          name={category}
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  )
}