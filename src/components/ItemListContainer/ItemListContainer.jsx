import React from "react";
import "./ItemListContainer.css";

function ItemListContainer(props) {
  return (
    <div className="listContainer">
      <h1>{props.greeting}</h1>
    </div>
  );
}

export default ItemListContainer;
