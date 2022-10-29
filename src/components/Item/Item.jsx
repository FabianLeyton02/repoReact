import React from "react";
import "./item.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <div className="item">
      <div className="item-img">
        <img src={props.img} alt={props.title} />
      </div>
      <div className="item-detail">
        <h2>{props.title}</h2>
        <p>{props.detail}</p>
        <h4>{props.category}</h4>
      </div>
      
      <Link to={`/${props.category}/${props.id}`}>
        <Button text="Ver detalles" />
      </Link>
    </div>
  );
}

export default Item;
