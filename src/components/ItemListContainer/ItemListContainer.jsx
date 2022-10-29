import React, { useState, useEffect } from "react";
import { getAllPhones, getPhonesByCategory } from "../../services/firebase";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function ItemListContainer(props) {
  const [phoneList, setPhonesList] = useState([]);
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setPhonesList([]);
    if (category === undefined) {
      getAllPhones().then((phoneList) => {
        setPhonesList(phoneList);
        setIsLoading(false);
      });
    } else {
      getPhonesByCategory(category).then((phoneList) => {
        setPhonesList(phoneList);
        setIsLoading(false);
      });
    }
  }, [category]);

  return (
    <section>
      <h1>{props.greeting}</h1>
      {isLoading ? <Loader /> : <ItemList phoneList={phoneList} />}
    </section>
  );
}

export default ItemListContainer;
