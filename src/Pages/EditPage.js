import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EditPage() {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [date, setDate] = useState(null);
    const [category, setCategory] = useState("");
    const [info, setInfo] = useState({ title, value, date, category });

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://ironrest.herokuapp.com/myFinance/${id}`)
      .then((response) => {
        setInfo(response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  let navigate = useNavigate();

  function handleSubmit(e) {
    const data = {
      title: info.title,
      value: info.value,
      date: info.date,
      category: info.category,
     }

    e.preventDefault();
    axios
      .put(`http://ironrest.herokuapp.com/myFinance/${id}`, data)
      .then((response) => alert("Item successfully updated!"))
      .catch((err) => console.log(err));
     document.location = '/homepage'
/*       navigate("/homepage")
 */  }

  return (
    <div>
      <h1 className="title">Edit item info</h1>
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
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
}
