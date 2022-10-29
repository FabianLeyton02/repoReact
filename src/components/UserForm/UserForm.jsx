import React, { useState } from "react";
import InputForm from "./InputForm";
import { createBuyOrder } from "../../services/firebase";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function UserForm({ cart, getTotalPrice, clear }) {
  const Swal = require("sweetalert2");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    emailaux: "",
    phone: "",
  });
  const navigate = useNavigate();

  function onInputChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;

    let newUserData = { ...userData };
    newUserData[name] = value;
    setUserData(newUserData);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    const orderData = {
      buyerData: { userData },
      cart: cart,
      total: getTotalPrice(),
      date: new Date(),
    };

    const { name, email, emailaux } = userData;

    if (name.trim() !== "" && email.trim() !== "" && emailaux !== "") {
      if (email === emailaux) {
        delete userData.emailaux;
        createBuyOrder(orderData).then((respuesta) => {
          clear();
          navigate(`/ordercompleted/${respuesta}`);
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Los correos ingresados no coinciden",
          icon: "error",
          confirmButtonText: "Cerrar",
        });
      }
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "40px",
      }}
    >
      <InputForm
        value={userData.name}
        title={"Nombre"}
        name={"name"}
        required={true}
        onChange={onInputChange}
        type={"text"}
      />
      <InputForm
        value={userData.email}
        title={"Email"}
        name={"email"}
        required={true}
        onChange={onInputChange}
        type={"email"}
      />
      <InputForm
        value={userData.emailaux}
        title={""}
        name={"emailaux"}
        required={true}
        onChange={onInputChange}
        type={"email"}
        placeholder={"reingrese el email"}
      />
      <InputForm
        value={userData.phone}
        title={"Teléfono"}
        name={"phone"}
        onChange={onInputChange}
        type={"number"}
      />
      <Button text={"Crear Orden"} color={"blue"} type={"submit"} />
    </form>
  );
}

export default UserForm;
