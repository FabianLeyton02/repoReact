import React from "react";

function InputForm(props) {
  return (
    <div style={{ display: "flex", marginBottom: 8 }}>
      <label style={{ width: "100px", marginRight: 4 }}>{props.title}</label>
      <input
        value={props.value}
        required={props.required}
        name={props.name}
        type={props.type}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default InputForm;
