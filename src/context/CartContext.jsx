import React, { createContext, useState } from "react";

const cartContext = createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function isInCart(id) {
    return cart.findIndex((itemInCart) => itemInCart.id === id);
  }

  function addToCart(item, count) {
    let itemIndex = isInCart(item.id);
    let newCart = [...cart];
    if (itemIndex < 0) {
      let newItem = { ...item, count };
      newCart.push(newItem);
    } else {
      newCart[itemIndex].count = newCart[itemIndex].count + count;
    }
    setCart(newCart);
  }

  function getTotalItemCount() {
    let total = 0;
    cart.forEach((itemInCart) => {
      total = total + itemInCart.count;
    });
    return total;
  }

  function clear() {
    setCart([]);
  }

  function removeItem(id) {
    let newCart = cart.filter((itemInCart) => itemInCart.id !== id);
    setCart(newCart);
  }

  function getTotalPrice() {
    let totalPrice = 0;
    cart.forEach((itemInCart) => {
      totalPrice = totalPrice + itemInCart.count * itemInCart.price;
    });
    return totalPrice;
  }

  return (
    <>
      <cartContext.Provider
        value={{
          cart,
          addToCart,
          getTotalItemCount,
          removeItem,
          getTotalPrice,
          clear,
        }}
      >
        {props.children}
      </cartContext.Provider>
    </>
  );
}

export { cartContext, CartContextProvider };
