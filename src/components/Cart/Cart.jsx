import React, { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import Button from "../Button/Button";

function Cart() {
  const { cart, removeItem } = useContext(cartContext);
  return (
    <div>
      {cart.map((phone) => (
        <div>
          <p>{phone.id}</p>
          <h2>{phone.title}</h2>
          <h4>U$S {phone.price}</h4>
          <h4>{phone.count}</h4>
          <h4>Precio Total: U$S {phone.count * phone.price}</h4>
          <Button onClick={() => removeItem(phone.id)} text="Eliminar"></Button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
