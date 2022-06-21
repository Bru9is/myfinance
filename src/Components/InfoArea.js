import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaInfoCircle, FaUserEdit, FaRegTrashAlt } from "react-icons/fa";

import ItemCard from "./ItemCard";


export default function InfoArea() {
  const [info, setInfo] = useState({});
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    console.log("qualquer coisa")
    axios
      .get("http://ironrest.herokuapp.com/myFinance")
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }, []);

  function deleteItem(_id) {
    axios
      .delete(`http://ironrest.herokuapp.com/myFinance/${_id}`)
      .then(() => setRefresh(!refresh))
      .catch((e) => console.log(e));
  }
  console.log(info)
  return (
    <div className="Items">
      <div className="item-header">
        <div></div>
        <h1>Item List</h1>
        <Link to={"/new-item"}>
          <p>New Item</p>
        </Link>
      </div>
      {info.map((item) => {
        return (
          <div className="items-list">
            <ItemCard
              key={item._id}
              title={item.title}
              value={item.value}
              data={item.data}
              category={item.category}
            />
            <Link to={`/${item._id}`}>
              <FaInfoCircle />
            </Link>
            <Link to={`/edit-item/${item._id}`}>
              <FaUserEdit />
            </Link>
            <FaRegTrashAlt onClick={() => deleteItem(item._id)} />
            </div>
        );
      })}
    </div>
  );
}