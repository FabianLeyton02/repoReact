import React, { useState } from "react";
import "./ItemListContainer.css";
import { getAllPhones } from "./ItemListData";
import ItemList from "../ItemList/ItemList";

function ItemListContainer(props) {
  const [data, setPhonesList] = useState([]);
  getAllPhones().then((data) => setPhonesList(data));

  return (
    <div className="listContainer">
      <h1>{props.greeting}</h1>
      <ul className="listContainerList">
        {data.map((item) => (
          <li key={item.id}>
            <ItemList
              title={item.title}
              route={item.img}
              alt={item.alt}
            ></ItemList>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;
