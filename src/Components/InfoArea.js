import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaInfoCircle, FaUserEdit, FaRegTrashAlt } from "react-icons/fa";

import ItemCard from "./ItemCard";
import './InfoArea.css'

export default function InfoArea() {
  const [info, setInfo] = useState();
  const [refresh, setRefresh] = useState(true);
    
  useEffect(() => {
    
    axios
      .get("http://ironrest.herokuapp.com/myFinance")
      .then((response) => setInfo(response.data))
      .catch((err) => console.log(err));
  }, [refresh, info]);

  function deleteItem(_id) {
    axios
      .delete(`http://ironrest.herokuapp.com/myFinance/${_id}`)
      .then(() => setRefresh(!refresh))
      .catch((e) => console.log(e));
  }
  if (!info){
    return <h1></h1>
  }
  
  return (
    <div className="items">
      <div className="item-header">
        <div className="items-list">
          <span className="span"><b>Date</b></span>
          <span className="span"><b>Category</b></span>
          <span className="span"><b>Title</b></span>
          <span className="span"><b>Value</b></span>
        </div>
      </div>
      {info.map((item) => {
        return (
          <div className="items-list">
            <ItemCard
              key={item._id}
              date={item.date}
              category={item.category}
              title={item.title}
              value={item.value}
            />
            <Link to={`/edit-item/${item._id}`}>
              <FaUserEdit size={20} style={{ fill: '#F5793B' }}/>
            </Link>
            <FaRegTrashAlt size={20} style={{ fill: '#F5793B', cursor: "pointer" }} onClick={() => deleteItem(item._id)} />
            </div>
        );
      })}
    </div>
  );
}
