import React from "react";
import { Link } from "react-router-dom";
import "./ItemList.css";

function ItemList(props) {
  return (
    <div className="ItemList">
      <p>{props.title}</p>
      <Link to={`/${props.id}`}>
        <img src={props.route} alt={props.alt} />
      </Link>
    </div>
  );
}

export default ItemList;
