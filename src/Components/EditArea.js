import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EditArea() {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [date, setDate] = useState(null);
    const [category, setCategory] = useState("");
    const [info, setInfo] = useState({ title, value, date, category });

    const data = {
     title,
     value,
     date,
     category,
    }

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://ironrest.herokuapp.com/myFinance/${_id}`)
      .then((response) => {
        setInfo(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put(`http://ironrest.herokuapp.com/myFinance/${_id}`, info)
      .then((response) => alert("Item successfully updated!"))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1 className="title">Item Edition</h1>
      <form className="item-creation" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          value={info.title}
          name={info.title}
          placeholder="Title"
          onChange={(e) => setInfo({ ...info, title: e.target.value })}
        />
        <label htmlFor="value">Value</label>
        <input
          value={info.value}
          name={info.value}
          placeholder="value"
          onChange={(e) => setInfo({ ...info, value: e.target.value })}
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          value={info.date}
          name={info.date}
          placeholder="date"
          onChange={(e) => setInfo({ ...info, date: e.target.value })}
        />
        <label htmlFor="category">Category</label>
        <input
          type="category"
          value={info.category}
          name={info.category}
          placeholder="category"
          onChange={(e) => setInfo({ ...info, category: e.target.value })}
        />
        <button type="submit">Confirmar</button>
      </form>
    </div>
  );
}