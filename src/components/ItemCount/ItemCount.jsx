import React, { useState } from "react";
import Button from "../Button/Button";
import "./itemcount.css";

function ItemCount({ stock, initial, text, onAdd }) {
  const [count, setCount] = useState(initial);

  function handleSubstract() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function handleAdd() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  return (
    <div className="itemcount">
      <div>
        <h2>Realiza tu compra</h2>
        <div className="itemcount_control">
          <Button onClick={handleSubstract} text={"-"} />
          <strong>{count}</strong>
          <Button onClick={handleAdd} text={"+"} />
        </div>

        <div className="itemcount_btn">
          <Button
            onClick={() => {
              onAdd(count);
            }}
            text={"Agregar al carrito"}
          />
        </div>
      </div>
    </div>
  );
}

export default ItemCount;
