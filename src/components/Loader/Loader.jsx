import React from "react";
import { Ring } from "@uiball/loaders";
import "./loader.css";

function Loader() {
  return (
    <div className="loaderContainer">
      <Ring size={40} lineWeight={5} speed={2} color="black" />;
    </div>
  );
}

export default Loader;
