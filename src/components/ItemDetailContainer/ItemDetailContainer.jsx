import React, { useState, useEffect } from "react";
import { getPhone } from "../ItemListContainer/ItemListData";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [phone, setPhone] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    getPhone(id).then((data) => {
      setPhone(data);
    });
  }, [id]);

  return (
    <div>
      <p>{phone.title}</p>
    </div>
  );
}

export default ItemDetailContainer;
