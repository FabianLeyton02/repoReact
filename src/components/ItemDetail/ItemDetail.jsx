import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./itemdetail.css";
import { cartContext } from "../../context/CartContext";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";

function ItemDetail({ phone }) {
  const [count, setCount] = useState(0);
  const { addToCart } = useContext(cartContext);
  function onAdd(count) {
    addToCart(phone, count);
    setCount(count);
  }

  if (phone.title) {
    return (
      <div className="itemdetail">
        <h2>{phone.title}</h2>
        <img src={phone.img} alt={phone.title} />
        <h3>{phone.detail}</h3>
        <h4>{phone.category}</h4>
        {count === 0 ? (
          <ItemCount
            onAdd={onAdd}
            stock={phone.stock}
            initial={1}
            text={"Agregar al carrito"}
          />
        ) : (
          <Link to="/cart">
            <Button text="Ver carrito" color="blue" />
          </Link>
        )}
      </div>
    );
  }
  return <Loader />;
}

export default ItemDetail;
