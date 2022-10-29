import React from "react";
import Item from "../Item/Item";
import "./itemlist.css";

function ItemList(props) {
  return (
    <div className="itemlist">
      {props.phoneList.map((item) => {
        return (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            img={item.img}
            alt={item.alt}
            category={item.category}
          />
        );
      })}
    </div>
  );
}

export default ItemList;
