import React, { useState, useEffect } from "react";
import { getPhone } from "../ItemListContainer/../../services/firebase";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [phone, setPhone] = useState([]);
  const [feedbackMsg, setFeedbackMsg] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getPhone(id)
      .then((data) => {
        setPhone(data);
      })
      .catch((error) => {
        setFeedbackMsg(error.message);
      });
  }, [id]);

  return (
    <div>
      {feedbackMsg !== null ? (
        <h4>{feedbackMsg}</h4>
      ) : (
        <ItemDetail phone={phone} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
