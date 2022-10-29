import React from "react";
import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>
            <img src="logostore.png" alt="logo" />
            <p>Tienda</p>
          </li>
        </Link>

        <Link to="/apple">
          <li>Apple</li>
        </Link>

        <Link to="/samsung">
          <li>Samsung</li>
        </Link>

        <Link to="/huawei">
          <li>Huawei</li>
        </Link>

        <Link to="/xiamoi">
          <li>Xiaomi</li>
        </Link>

        <Link to="/motorola">
          <li>Motorola</li>
        </Link>

        <Link to="/cart">
          <CartWidget />
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
