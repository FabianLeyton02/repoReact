import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getOrder } from "../../services/firebase";
function OrderDetail() {
  const [order, setOrder] = useState([]);
  const [feedbackMsg, setFeedbackMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getOrder(id)
      .then((data) => {
        setOrder(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setFeedbackMsg(error);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : feedbackMsg !== null ? (
        <h1>Hubo un error</h1>
      ) : (
        <div>
          <h1>Su orden de compra ha sido completada</h1>
          {order.cart.map((phone) => (
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
            </div>
          ))}
          <h2>Precio Final U$S {order.total}</h2>
        </div>
      )}
    </div>
  );
}

export default OrderDetail;
