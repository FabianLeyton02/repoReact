import React, { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import Button from "../Button/Button";
import UserForm from "../UserForm/UserForm";

function Cart() {
  const { cart, removeItem, getTotalPrice, clear } = useContext(cartContext);

  return (
    <>
      {cart.length > 0 ? (
        <div>
          {cart.map((phone) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
              key={phone.id}
            >
              <div>
                <img
                  style={{ height: "50px", width: "50px" }}
                  src={phone.img}
                  alt={phone.alt}
                />
              </div>
              <div>{phone.title}</div>
              <div>
                <h4>{phone.count}</h4>
              </div>
              <div>U$S {phone.price}</div>
              <div>Precio Total: U$S {phone.count * phone.price}</div>
              <div>
                <Button
                  onClick={() => removeItem(phone.id)}
                  text="Eliminar"
                  color="red"
                ></Button>
              </div>
            </div>
          ))}

          <div>
            <h4>Importe Total: U$S {getTotalPrice()}</h4>
          </div>
          <UserForm cart={cart} getTotalPrice={getTotalPrice} clear={clear} />
        </div>
      ) : (
        <h4>Carrito vacío</h4>
      )}
    </>
  );
}

export default Cart;
