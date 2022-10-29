import React, { useContext } from "react";
import "./CartWidget.css";
import { cartContext } from "../../context/CartContext";

function CartWidget() {
  const { getTotalItemCount } = useContext(cartContext);
  return (
    <>
      <img className="cart" src="cart.png" alt="cart" />
      <span>{getTotalItemCount() > 0 && getTotalItemCount()}</span>
    </>
  );
}

export default CartWidget;
